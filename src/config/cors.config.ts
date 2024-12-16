import cors from "cors";
import env from "../utils/env.js";

export default cors({
  origin: env("CLIENT_URL"),
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
