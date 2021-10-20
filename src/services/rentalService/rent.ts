import DatabaseService from "../db.service";
import getBonus from "./getBonus";

const rent = async ({ user, rental, total }) => {
  // Decrement movie count
  await DatabaseService.decMovieCount(rental.movieTitle);

  // Update rental object
  rental.price = total;

  // Add rental object to user
  await DatabaseService.addRentalToUser({ ...rental, user });

  // Add new bonus to user
  await DatabaseService.addToUserPoints(user.uuid, getBonus(rental.movieType));

  // Return receipt to user
  return `${rental.movieTitle} (${rental.movieType}) ${rental.days} days ${total} EUR`;
};

export default rent;
