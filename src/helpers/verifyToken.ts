import jwt from "jsonwebtoken";
import { jwtPrivateKey } from "../../config";
export default function (token: any) {
  return jwt.verify(token, jwtPrivateKey);
}
