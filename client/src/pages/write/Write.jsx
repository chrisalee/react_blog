import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./write.css";
import BackToTop from "../../components/backToTop/BackToTop";
import Footer from "../../components/footer/Footer";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const response = await axios.post("/posts", newPost);
      window.location.replace("/post/" + response.data._id);
    } catch (error) {}
  };

  return (
    <div className="write">
      {/* <div> */}
        {file && (
          <img src={URL.createObjectURL(file)} alt='' className="write__img" />
        )}
      {/* </div> */}
      <form className="write__form" onSubmit={handleSubmit}>
        <div className="write__formGroup">
          <label htmlFor="fileInput">
            <span
              className="iconify write__icon"
              data-icon="ant-design:file-add-twotone"
            ></span>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(event) => setFile(event.target.files[0])}
          />
          <input
            className="write__input"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="write__formGroup">
          <textarea
            className="write__input write__textarea"
            placeholder="Tell your story..."
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button className="write__submit" type="submit">
          Publish
        </button>
      </form>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Write;
