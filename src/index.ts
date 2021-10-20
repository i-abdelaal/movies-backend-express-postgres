import db from "./startup/db";
import server from "./startup/server";

process.on("uncaughtException", (ex) => {
  // Log exception
  console.log("SOMETHING FAILED DURING STARTUP!");
});

process.on("unhandledRejection", (ex) => {
  // Log promise rejection
  console.log("UNHANDLED PROMISE REJECTION!");
});
db.connect();
server.init();
