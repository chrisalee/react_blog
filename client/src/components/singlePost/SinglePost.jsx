import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import "./singlePost.css";

const SinglePost = () => {
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("/posts/" + path);
      // console.log(response);
      setPost(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    console.log("clicked");
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (error) {}
  };

  // console.log(post.username === user.username)

  return (
    <div className="singlePost">
      <div className="singlePost__container">
        {post.photo && (
          <img
            className="singlePost__img"
            src={publicFolder + post.photo}
            alt={post.photo}
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePost__titleInput"
            autoFocus
            onChange={(event) => setTitle(event.target.value)}
          />
        ) : (
          <h1 className="singlePost__title">
            {title}
            {post.username === user?.username && (
              <>
                <div className="singlePost__edit" onClick={handleDelete}>
                  <span
                    className="iconify singlePost__icon"
                    data-icon="heroicons-outline:trash"
                  ></span>
                </div>
                <div className="singlePost__edit" onClick={() => setUpdateMode(true)}>
                  <span
                    className="iconify singlePost__icon"
                    data-icon="ci:edit"
                  ></span>
                </div>
              </>
            )}
          </h1>
        )}
        <div className="singlePost__info">
          <span>
            Author:
            <b className="singlePost__author">
              <Link to={`/?user=${post.username}`} className="singlePost__link">
                {post.username}
              </Link>
            </b>
          </span>
          <span className="singlePost__date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePost__descriptionInput"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        ) : (
          <p className="singlePost__description">{description}</p>
        )}
        {updateMode && (
          <>
          <button className="singlePost__button" onClick={handleUpdate}>
            Update
          </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
