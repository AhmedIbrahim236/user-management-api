import connection from "./config/database.config.js";
import express, { Application } from "express";
import env from "./utils/env.js";
import appRouter from "./modules/app/app.router.js";

connection(env("DB_URI"));

const app: Application = express();
const port: number = parseInt(env("SERVER_PORT") ?? "3000", 10);
const mode: string = env("SERVER_MODE") ?? "development";
const prefix: string = env("SERVER_PREFIX") ?? "/api/v1";

app.use(express.json());

app.use(`${prefix}`, appRouter);

app.listen(port, (): void => {
  console.log(`Server is running on ${mode} mode at http://localhost:${port}`);
});
