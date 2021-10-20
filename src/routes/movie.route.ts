import express from "express";

import movieController from "../controllers/movie.controller";
import { validate, superAdmin } from "../middleware";
import { movieSchemaValidator } from "../helpers";

const router = express.Router();

router.post("/", validate(movieSchemaValidator), movieController.add);
router.get("/", movieController.listAllMovies);
router.get("/available", movieController.listAllAvailableMovies);
router.delete("/:uuid", superAdmin, movieController.remove);

export default Object.freeze(router);
