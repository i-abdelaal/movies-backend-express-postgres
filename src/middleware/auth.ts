import verifyToken from "../helpers/verifyToken";

export default function (req: any, res: any, next: any) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("ACCESS DENIED!");

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("INVALID TOKEN!");
  }
}
