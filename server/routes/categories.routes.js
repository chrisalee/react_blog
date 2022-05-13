const router = require("express").Router();
const Category = require('../models/category.model');

// CREATE NEW CATEGORY
router.post("/", async (request, response) => {
  const newCategory = new Category(request.body);
  try {
    const savedCategory = await newCategory.save();
    response.status(200).json(savedCategory);
  } catch (error) {
    response.status(500).json(error);
  }
});

// GET CATEGORY
router.get("/", async (request, response) => {
  try {
    const categories = await Category.find();
    response.status(200).json(categories);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
