import compression from "compression";

export default compression({
  filter: (req, res) => {
    const contentType = req.headers["content-type"];
    if (req.headers["x-no-compression"]) {
      return false;
    }
    if (!contentType || !contentType.startsWith("text/")) return false;
    return compression.filter(req, res);
  },
});
