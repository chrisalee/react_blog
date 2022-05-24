import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const publicFolder = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && (
        <Link to={`/post/${post._id}`} className="post__link">

        <img
          className="post__img"
          src={publicFolder + post.photo}
          alt={post.title}
          />
          </Link>
      )}
      <div className="post__info">
        <Link to={`/post/${post._id}`} className="post__link">
          <div className="post__categories">
            {post.categories.map((cat) => (
              <span className="post__category">{cat.name}</span>
            ))}
          </div>
          <span className="post__title">{post.title}</span>
        </Link>
        <hr />
        <span className="post__date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post__description">{post.description}</p>
    </div>
  );
};

export default Post;
