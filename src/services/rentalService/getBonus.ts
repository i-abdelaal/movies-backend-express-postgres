import { premiumBonus, regularBonus } from "../../../config";

// New bonus calculation
export default (filmType: string) => {
  return filmType === "new" ? premiumBonus : regularBonus;
};
