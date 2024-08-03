const jwt = require("jsonwebtoken");

const authM = (req, res, next) => {
  try {
    const token = (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer") &&
      req.headers.authorization.split(" ")[1]) ||
      (req.headers.Authorization &&
        req.headers.Authorization.startsWith("Bearer") &&
        req.headers.Authorization.split(" ")[1]);
    if (token) {
      jwt.verify(token, (process.env.SECRET_KEY || "xipper-shopify-assignment"), (err, user) => {
        if (err) {
          return res.status(401).send({ success: false, message: "Token is not valid!" });
        }
        req.user = user;
        next();
      });
    }
    else {
      return res.status(401).send({ success: false, message: "NOT AUTHORIZED" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err.message });
  }
}
module.exports = authM;