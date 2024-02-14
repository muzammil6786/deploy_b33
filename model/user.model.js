const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
