import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
        <Link to={`/post/${post._id}`} className="post__link">
    <div className="post">
        {post.photo && (
          <img className="post__img" src={post.photo} alt={post.title} />
        )}
        <div className="post__info">
          <div className="post__categories">
            {post.categories.map((cat) => (
              <span className="post__category">{cat.name}</span>
            ))}
          </div>
          <span className="post__title">{post.title}</span>
          <hr />
          <span className="post__date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="post__description">{post.description}</p>
      </div>
    </Link>
  );
};

export default Post;
