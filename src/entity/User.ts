import { IsEmail, IsEnum, Length, validate } from "class-validator";
import { Entity, Column, OneToMany, Unique } from "typeorm";
import Model from "./Model";
import Rental from "./Rental";

@Entity("users")
export default class User extends Model {
  @Column()
  @Length(1, 100)
  name: string;

  @Column({ unique: true })
  @Length(5, 100)
  @IsEmail()
  email: string;

  @Column()
  @Length(5, 100)
  password: string;

  @Column({
    type: "enum",
    enum: ["user", "admin", "superadmin"],
    default: "user",
  })
  @IsEnum(["user", "admin", "superadmin", undefined])
  role: string;

  @Column({
    default: 0,
  })
  points: number;

  @OneToMany(() => Rental, (rental) => rental.user)
  rentals: Rental[];

  static async addUser(body: any) {
    const user = new User(body);
    const errors = await validate(user);
    if (errors.length > 0) throw errors;
    await user.save();
    return user;
  }

  static async findByEmail(email: string) {
    return await User.findOneOrFail({ where: { email } });
  }

  static async findById(uuid: string) {
    return await this.findOneOrFail(uuid);
  }

  static async updateUser(body: any) {
    const user = await this.findOneOrFail(body.uuid);

    User.merge(user, body);
    return await user.save();
  }

  static async getPoints(uuid: string) {
    const result = await this.findOneOrFail({
      where: { uuid },
      select: ["points"],
    });
    return result[0];
  }

  static async addToPoints(uuid: string, newPoints: number) {
    const user = await this.findOneOrFail(uuid);
    user.points += newPoints;
    return await user.save();
  }

  static async addRentalToUser(uuid: string, rental: any) {
    const user = await User.findOneOrFail({
      where: { uuid },
      relations: ["rentals"],
    });
    user.rentals.push(rental);
    return await user.save();
  }

  static async getAllRentalsOfUser(uuid: string) {
    const user = await User.findOneOrFail({
      where: { uuid },
      relations: ["rentals"],
    });
    return user.rentals;
  }
}
