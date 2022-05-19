const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username required"],
      unique: [true, "Username already exists"],
      // minlength: [3, "Username must be at least 3 characters long."],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "This email is already associated with another username."],
    },
    password: {
      type: String,
      required: true,
      // minlength: [6, "The password needs to be at least 6 characters long."],
    },
    profilePicture: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
