import express, { Application } from "express";

const app: Application = express();

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});