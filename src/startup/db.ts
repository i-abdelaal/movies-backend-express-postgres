import "reflect-metadata";
import { createConnection } from "typeorm";
import { dbPort } from "../../config";

const connect = () => {
  {
    createConnection()
      .then(async () => {
        console.log(`db connected on port ${dbPort}`);
      })
      .catch((error) => console.log(error));
  }
};

export default Object.freeze({ connect });
