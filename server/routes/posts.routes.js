const router = require("express").Router();
const Post = require("../models/post.model");

// CREATE NEW POST
router.post("/", async (request, response) => {
  const newPost = new Post(request.body);
  try {
    const savedPost = await newPost.save();
    response.status(200).json(savedPost);
  } catch (error) {
    response.status(500).json(error);
  }
});

// UPDATE POST
router.put("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (post.username === request.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          request.params.id,
          {
            $set: request.body,
          },
          {
            new: true,
          }
        );
        response.status(200).json(updatedPost);
      } catch (error) {
        response.status(500).json(error);
      }
    } else {
      response.status(401).json("You can only update your own posts");
    }
  } catch (error) {
    response.status(500).json(error);
  }
});

// DELETE POST
router.delete("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (post.username === request.body.username) {
      try {
        await post.delete();
        response.status(200).json("Post has been deleted");
      } catch (error) {
        response.status(500).json(error);
      }
    } else {
      response.status(401).json("You can only delete your own posts");
    }
  } catch (error) {
    response.status(500).json(error);
  }
});

// GET POST
router.get("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
});

// GET ALL POSTS
router.get("/", async (request, response) => {
  const username = request.query.user;
  const categoryName = request.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      });
    } else {
      posts = await Post.find();
    }
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
