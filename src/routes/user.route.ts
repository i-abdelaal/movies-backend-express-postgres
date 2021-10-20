import express from "express";

import userController from "../controllers/user.controller";
import { validate } from "../middleware";
import { userSchemaValidator } from "../helpers";

const router = express.Router();

router.post("/", validate(userSchemaValidator), userController.create);

export default Object.freeze(router);
