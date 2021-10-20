import DatabaseService from "../db.service";

const getActiveUserRentals = async (userUuid: string) => {
  return await DatabaseService.getActiveUserRentals(userUuid);
};

export default getActiveUserRentals;
