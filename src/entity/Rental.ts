import { Entity, Column, ManyToOne } from "typeorm";
import { IsEnum, Length, validate } from "class-validator";

import Model from "./Model";
import User from "./User";

@Entity("rentals")
export default class Rental extends Model {
  @Column()
  @Length(1, 100)
  filmTitle: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: "enum", enum: ["new", "regular", "old"], default: "new" })
  @Length(1, 100)
  @IsEnum(["new", "regular", "old", undefined])
  filmType: string;

  @Column({ default: 1 })
  days: number;

  @Column({ default: 0 })
  price: number;

  @Column({ default: 0 })
  redeemedPoins: number;

  @ManyToOne(() => User, (user) => user.rentals)
  user: User;

  static async addRental(body: any) {
    const rental = new Rental(body);
    const errors = await validate(rental);
    if (errors.length > 0) throw errors;
    await rental.save();
    return rental;
  }

  static async findById(uuid: string) {
    return await Rental.findOneOrFail({ where: { uuid } });
  }

  static async getActiveUserRentals(user: any) {
    return await Rental.find({
      where: { user, isActive: true },
    });
  }

  static async deactivate(uuid: string) {
    const rental = await Rental.findOneOrFail(uuid);
    rental.isActive = false;
    return await rental.save();
  }
}
