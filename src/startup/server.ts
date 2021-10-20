import express from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";

import { httpPort } from "../../config";

import { error } from "../middleware";
import { authRoute, userRoute, movieRoute, rentalRoute } from "../routes";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/film", movieRoute);
app.use("/rental", rentalRoute);

// Error handler middleware
app.use(error);

const init = () => {
  app.listen(httpPort, () => {
    console.log(`Server launched on port ${httpPort}`);
  });
};

export default Object.freeze({
  init,
});
