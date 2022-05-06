import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost__container">
        <img
          className="singlePost__img"
          src="https://d.newsweek.com/en/full/1745575/trump.jpg"
          alt=""
        />
        <h1 className="singlePost__title">
          Single Post Title
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
            <b className="singlePost__author">Chris L</b>
          </span>
          <span className="singlePost__date">1 day ago</span>
        </div>
        <p className="singlePost__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi id
          perferendis tempora voluptas debitis porro, quae, unde deleniti culpa
          accusamus dolores minus magnam, et cum totam perspiciatis sequi.
          Eaque, nemo? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Molestiae laborum omnis aperiam id maxime similique, quasi quibusdam
          sed dicta ad ipsa nulla alias nisi saepe aliquid ut sit dignissimos
          enim! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          est quam et repudiandae sint neque nemo, necessitatibus voluptatibus!
          Quia aspernatur, amet ab vitae expedita eaque ipsum repellat? Maiores,
          dolorum officia!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias
          sapiente suscipit aliquam doloribus pariatur voluptatem, ipsam
          nesciunt eum dolorem consectetur consequatur adipisci consequuntur,
          aut fugiat cumque nulla esse voluptate. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Impedit similique minus, quis, quod
          neque dolorum laudantium vero amet mollitia magnam, ipsa totam et
          inventore distinctio. Totam beatae pariatur natus harum!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
