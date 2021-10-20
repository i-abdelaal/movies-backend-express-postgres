import bcrypt from "bcrypt";

export default async function (givenPsswd: any, storedPsswd: any) {
  return await bcrypt.compare(givenPsswd, storedPsswd);
}
