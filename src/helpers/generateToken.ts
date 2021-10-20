import jwt from "jsonwebtoken";

import { jwtPrivateKey } from "../../config";

export default function (user: any) {
  return jwt.sign(user, jwtPrivateKey);
}
