import express from "express";

import rentalController from "../controllers/rental.controller";

const router = express.Router();

router.get("/active", rentalController.getActiveUserRentals);
router.post("/getPrice", rentalController.getPrice);
router.post("/rent", rentalController.rent);
router.post("/redeem", rentalController.redeem);

export default Object.freeze(router);
