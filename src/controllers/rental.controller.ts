import { Request, Response } from "express";
import DatabaseService from "../services/db.service";
import { getPrice, rent, redeem } from "../services/rentalService";

const rentalController = {
  getActiveUserRentals: async (req: Request, res: Response) => {
    const activeUserRentals = await DatabaseService.getActiveUserRentals(
      req.body.user
    );
    res.json(activeUserRentals);
  },
  getPrice: async (req: Request, res: Response) => {
    const DTO = {
      uuid: req.body.uuid,
      days: req.body.days,
    };
    const result = await getPrice(DTO);
    if (!result) return;
    res.json(result);
  },
  rent: async (req: Request, res: Response) => {
    const DTO = {
      user: req.body.user,
      rental: req.body.rental,
      total: req.body.total,
    };

    const result = await rent(DTO);
    res.json({ msg: result });
  },

  redeem: async (req: Request, res: Response) => {
    const DTO = {
      user: req.body.user,
      rental: req.body.rental,
      total: req.body.total,
    };
    const result = await redeem(DTO);
    res.json({ msg: result });
  },
};

export default Object.freeze(rentalController);
