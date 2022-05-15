import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";

const SinglePost = () => {
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("/posts/" + path);
      // console.log(response);
      setPost(response.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePost__container">
        {post.photo && (
          <img className="singlePost__img" src={post.photo} alt={post.title} />
        )}
        <h1 className="singlePost__title">
          {post.title}
          <div className="singlePost__edit">
            <span
              className="iconify singlePost__icon"
              data-icon="ci:edit"
            ></span>
            <span
              className="iconify singlePost__icon"
              data-icon="heroicons-outline:trash"
            ></span>
          </div>
        </h1>
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
        <p className="singlePost__description">{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;
