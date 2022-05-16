const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: [true, "This category already exists."] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
