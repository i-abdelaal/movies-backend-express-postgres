import bcrypt from "bcrypt";

export default async function (psswd: any) {
  const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT));
  return await bcrypt.hash(psswd, salt);
}
