const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  //const token = req.headers["x-access-token"] || req.headers["authorization"];
  const token = req.body.token;
  if (!token)
    return res
      .status(401)
      .json({ message: `Access denied, no token provided`, success: false });

  jwt.verify(
    token,
    process.env.SECURITY_TOKEN_PRIVATE_ROUTES,
    // eslint-disable-next-line no-unused-vars
    (error, decode) => {
      if (!error) {
        next();
      } else {
        res.status(400).json({ message: `Invalid Token!`, success: false });
      }
    }
  );
};
