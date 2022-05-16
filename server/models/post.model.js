const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Please include a title"] },
    description: { type: String, required: [true, "Please provide a description"] },
    photo: { type: String },
    username: { type: String, required: true },
    categories: { type: Array },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Post", PostSchema);