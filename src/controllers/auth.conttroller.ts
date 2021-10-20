import { Request, Response } from "express";
import { validatePsswd, generateToken } from "../helpers";

import DatabaseService from "../services/db.service";

const authController = {
  auth: async (req: Request, res: Response) => {
    // Check for user
    const storedUser = await DatabaseService.getUserByEmail(req.body.email);
    if (!storedUser) return res.status(400).send("Invalid Credentials!");

    // Validate credentials
    const validPassword = await validatePsswd(
      req.body.password,
      storedUser.password
    );
    if (!validPassword) return res.status(400).send("Invalid Credentials!");

    // Set token in request header
    const token = generateToken(storedUser);
    res.json(token);
  },
};

export default Object.freeze(authController);
