import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="post__img"
        src="https://th.bing.com/th/id/OIP.sxNV5ex-Z94Nvf1nJYs7dAHaEV?pid=ImgDet&rs=1"
        alt=""
      />
      <div className="post__info">
        <div className="post__categories">
          <span className="post__category">Music</span>
          <span className="post__category">Life</span>
        </div>
        <span className="post__title">
          Title ipsum dolor adipisicing elit.
        </span>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__description">
        Description ipsum dolor, sit amet consectetur adipisicing elit. Ab enim
        quibusdam quod repellendus, possimus dolorum cumque nostrum blanditiis
        asperiores natus expedita aut harum labore magnam tempore sed eligendi?
        Sequi, dolorem.
      </p>
    </div>
  );
};

export default Post;
