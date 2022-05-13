const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const bcrypt = require("bcrypt");

// UPDATE
router.put("/:id", async (request, response) => {
  if (request.body.userId === request.params.id) {
    if (request.body.password) {
      const salt = await bcrypt.genSalt(10);
      request.body.password = await bcrypt.hash(request.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        request.params.id,
        {
          $set: request.body,
        },
        {
          new: true,
        }
      );
      response.status(200).json(updatedUser);
    } catch (error) {
      response.status(500).json(error);
    }
  } else {
    response.status(401).json("You can only make changes to your account");
  }
});

// DELETE
router.delete("/:id", async (request, response) => {
  if (request.body.userId === request.params.id) {
    try {
      const user = await User.findById(request.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(request.params.id);
        response.status(200).json("The user has been deleted");
      } catch (error) {
        response.status(500).json(error);
      }
    } catch (error) {
      response.status(404).json("This user does not exist");
    }
  } else {
    response.status(401).json("You can only delete your account")
  }
});

// GET USER
router.get("/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    const { password, ...others } = user._doc;
    response.status(200).json(others);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
