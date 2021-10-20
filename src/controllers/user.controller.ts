import { Request, Response } from "express";
import DatabaseService from "../services/db.service";

const userController = {
  create: async (req: Request, res: Response) => {
    const user = await DatabaseService.addUser(req.body);
    res.status(201).json(user);
  },
};

export default Object.freeze(userController);
