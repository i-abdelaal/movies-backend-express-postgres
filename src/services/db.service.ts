import Movie from "../entity/Movie";
import User from "../entity/User";
import Rental from "../entity/Rental";

export default class DatabaseService {
  // Movie

  static addMovie = Movie.addMovie;

  static removeMovie = Movie.delete;

  static updateMovie = Movie.updateMovie;

  static listAllMovies = Movie.listAllMovies;

  static listAllAvailableMovies = Movie.listAllAvailableMovies;

  static isMovieAvailable = Movie.isAvailable;

  static checkMovieType = Movie.checkType;

  static decMovieCount = Movie.decrementCount;

  static incMovieCount = Movie.incrementCount;

  // User

  static addUser = User.addUser;

  static getUserByEmail = User.findByEmail;

  static getAllUserRentals = User.getAllRentalsOfUser;

  static getUserPoints = User.getPoints;

  static addToUserPoints = User.addToPoints;

  // Rental

  static addRentalToUser = Rental.addRental;

  static findRental = Rental.findById;

  static getActiveUserRentals = Rental.getActiveUserRentals;

  static deactivateRental = Rental.deactivate;
}
