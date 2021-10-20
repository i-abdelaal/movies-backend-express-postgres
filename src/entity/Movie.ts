import { Entity, Column, MoreThan } from "typeorm";
import { IsEnum, Length, validate } from "class-validator";

import Model from "./Model";

@Entity("movies")
export default class Movie extends Model {
  @Column()
  @Length(1, 100)
  title: string;

  @Column({ type: "enum", enum: ["new", "regular", "old"], default: "new" })
  @Length(1, 100)
  @IsEnum(["new", "regular", "old", undefined])
  type: string;

  @Column({ default: 0 })
  count: number;

  static async addMovie(body: any) {
    const movie = new Movie(body);
    const errors = await validate(movie);
    if (errors.length > 0) throw errors;
    await movie.save();
    return movie;
  }

  static async deleteMovie(uuid: string) {
    return await Movie.delete(uuid);
  }

  static async updateMovie(body: any) {
    const movie = await Movie.findOneOrFail(body.uuid);
    Movie.merge(movie, body);
    await movie.save();
    return movie;
  }

  static async decrementCount(movieTitle: string) {
    const movie = await Movie.findOneOrFail(movieTitle);
    movie.count = movie.count - 1;
    return await movie.save();
  }

  static async incrementCount(movieTitle: string) {
    const movie = await Movie.findOneOrFail(movieTitle);
    movie.count = movie.count + 1;
    return await movie.save();
  }
  static async listAllMovies() {
    return await Movie.find();
  }

  static async listAllAvailableMovies() {
    return await Movie.find({ where: { count: MoreThan(0) } });
  }

  static async isAvailable() {
    return await Movie.findOne({ where: { count: MoreThan(0) } });
  }

  static async checkType(uuid: string) {
    const movie = await Movie.findOneOrFail(uuid);
    return movie.type;
  }
}
