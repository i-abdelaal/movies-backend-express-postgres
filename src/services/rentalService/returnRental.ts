import DatabaseService from "../db.service";

const returnRental = async (rentalUuid: string, movieTitle: string) => {
  await DatabaseService.deactivateRental(rentalUuid);
  await DatabaseService.incMovieCount(movieTitle);
  return;
};

export default returnRental;
