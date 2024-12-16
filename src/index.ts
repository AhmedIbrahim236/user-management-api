import express, { Application } from "express";
import morgan from "morgan";

import env from "./utils/env.js";
import appRouter from "./modules/app/app.router.js";

// Configurations
import connection from "./config/database.config.js";
import gzip from "./config/compression.config.js";
import cors from "./config/cors.config.js";
import helmet from "./config/helmet.config.js";
import limiter from "./config/limiter.config.js";

connection(env("DB_URI"));

const app: Application = express();
const port: number = parseInt(env("SERVER_PORT") ?? "3000", 10);
const mode: string = env("SERVER_MODE") ?? "development";
const prefix: string = env("SERVER_PREFIX") ?? "/api/v1";
const isDev: boolean = mode === "development";

app.use(express.json());
isDev && app.use(morgan("dev"));
app.use(gzip);
app.use(cors);
app.use(helmet);
app.use(limiter);

app.use(`${prefix}`, appRouter);

app.listen(port, (): void => {
  console.log(`Server is running on ${mode} mode at http://localhost:${port}`);
});
