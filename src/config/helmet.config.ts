import helmet from "helmet";
import env from "../utils/env.js";

const isDev = env("SERVER_MODE") === "development";

export default helmet({
  contentSecurityPolicy: isDev
    ? false
    : {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "https://trusted-scripts.com"],
          styleSrc: ["'self'", "https://trusted-styles.com"],
          imgSrc: ["'self'", "data:"],
        },
      },
});
