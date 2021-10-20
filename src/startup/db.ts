import "reflect-metadata";
import { createConnection } from "typeorm";

const dbPort = process.env.TYPEORM_PORT || 5432;

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
