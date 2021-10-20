import DatabaseService from "../db.service";
import { premiumFee, redeemValue } from "../../../config";
import getBonus from "./getBonus";

const redeem = async ({ user, rental, total }) => {
  // Make discount
  const deservedValue = discount(rental.movieType, user.points);

  // price after discount
  const amountToPay = afterDiscount(deservedValue, total);

  // Get redeem points
  const redeemedPoints = (amountToPay - total) / redeemValue;

  // Decrement movie count
  await DatabaseService.decMovieCount(rental.movieTitle);

  // Decrement user points
  await DatabaseService.addToUserPoints(user.uuid, redeemedPoints);

  // Update rental object
  rental.price = amountToPay;
  rental.redeemedPoints = redeemedPoints;

  // Add rental object to user
  await DatabaseService.addRentalToUser({ ...rental, user });

  // Add new bonus to user
  await DatabaseService.addToUserPoints(user.uuid, getBonus(rental.movieType));

  // Return receipt to user
  return `${rental.movieTitle} (${rental.movieType}) ${
    rental.days
  } days (Paid with ${redeemedPoints} bonus points) 
  Remaining bonus points ${user.points - redeemedPoints}`;
};

// Get price after discount
const afterDiscount = (discountValue: number, total: number) => {
  if (total >= discountValue) return total - discountValue;
  do {
    discountValue -= premiumFee;
  } while (total < discountValue);
  return total - discountValue;
};

// Get discount
const discount = (movieType: string, points: number) => {
  if (movieType !== "new" || points < redeemValue) return 0;
  const deservedDays = Math.floor(points / redeemValue);
  return premiumFee * deservedDays;
};

export default redeem;
