import DatabaseService from "../db.service";

const trackPoints = async (uuid: string) => {
  return await DatabaseService.getUserPoints(uuid);
};

export default trackPoints;
