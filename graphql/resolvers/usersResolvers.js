require("dotenv").config();
const bcrypt = require("bcryptjs");
const { UserInputError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");
const {
  validateLoginInput,
  validateRegisterInput,
} = require("../../utils/validators");

function generateToken(user) {
  return jwt.sign(
    {
      //fields corresponding to specific user that can be used for authentication
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: "3h" }
  );
}

module.exports = {
  Mutation: {
    async registerUser(_, { username, email, password, confirmPassword }) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const checkUniqueness = await User.findOne({ username });
      if (checkUniqueness) {
        throw new UserInputError("Username is already taken", {
          errors: "Username already taken",
        });
      }
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      });
      nUser = await newUser.save();

      const token = generateToken(nUser);

      return {
        ...nUser._doc,
        id: nUser._id,
        token,
      };
    },
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username }); //finding user with that username; password verification && token generation next
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong credentials";
        throw new UserInputError("Wrong credentials", { errors });
      }
      const token = generateToken(user); //generate token takes a specific 'user' document of mongodb collctn
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};
