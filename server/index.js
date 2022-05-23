const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const multer = require('multer');
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/users.routes");
const postRoute = require("./routes/posts.routes");
const categoryRoute = require("./routes/categories.routes");

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 5000;
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => console.log("Connected to the MongoDB"))
  .catch((error) => console.log(error));

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "images");
  },
  filename: (request, file, cb) => {
    cb(null, request.body.name);
  }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (request, response) => {
  response.status(200).json("File uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}.  BOOM BABY!!!`);
});
