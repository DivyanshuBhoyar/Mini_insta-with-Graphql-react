const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (context) => {
  //context = {...headers}
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    //Bearer ...

    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        key = process.env.SECRET_KEY;
        const user = jwt.verify(token, key);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/expired token ");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
