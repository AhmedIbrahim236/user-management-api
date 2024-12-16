import connection from "./config/database.config.js";
import express, { Application } from "express";
import env from "./utils/env.js";

connection(env("DB_URL"));

const app: Application = express();
const port: number = parseInt(env("SERVER_PORT") ?? "3000", 10);
const mode: string = env("SERVER_MODE") ?? "development";

app.listen(port, (): void => {
  console.log(`Server is running on ${mode} mode at http://localhost:${port}`);
});
