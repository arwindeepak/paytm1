
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];

  try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (decoded) {
        req.userId = decoded.userId;
      }
     next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      msg:"token error"
    });
  }
};

module.exports = {
  authMiddleware,
};
