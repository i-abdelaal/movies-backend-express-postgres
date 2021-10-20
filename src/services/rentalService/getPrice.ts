import DatabaseService from "../db.service";

import { premiumFee, regularFee } from "../../../config";

export default async function ({ uuid, days }) {
  // Check if Movie available
  const isMovieAvailable = await DatabaseService.isMovieAvailable();
  if (!isMovieAvailable) return;

  // Check Movie type
  const movieType = await DatabaseService.checkMovieType(uuid);

  // Get price
  return price(movieType, days);
}

// Calculate price
export const price = (type: any, days: number) => {
  let total: number = 0;
  if (type === "new") {
    total = premiumFee * days;
  } else if (type === "regular" && days > 3) {
    total = regularFee + regularFee * (days - 3);
  } else if (type === "old" && days > 5) {
    total = regularFee + regularFee * (days - 5);
  } else {
    total = regularFee;
  }
  return total;
};
