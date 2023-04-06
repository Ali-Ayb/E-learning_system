const jwt = require("jsonwebtoken");

exports.authMidlleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "unauthinticated" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (e) {
    console.log(e);
  }
};
