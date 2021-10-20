import express from "express";

import authConttroller from "../controllers/auth.conttroller";

const router = express.Router();

router.post("/", authConttroller.auth);

export default Object.freeze(router);
