import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://th.bing.com/th/id/R.c25996cf3ab729a2fa74ff503e3a9eda?rik=YYWiWJLOp2NODA&riu=http%3a%2f%2famericanprofile.com%2fwp-content%2fuploads%2f2012%2f01%2fg-pen-writing-on-paper.jpg&ehk=LQ0KQABFzhYfRhYdZx9SJ679OfjhGvl%2bTHqE%2b7zBiJI%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="write__img"
      />
      <form className="write__form">
        <div className="write__formGroup">
          <label htmlFor="fileInput">
            <span
              className="iconify write__icon"
              data-icon="ant-design:file-add-twotone"
            ></span>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="write__input"
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="write__formGroup">
          <textarea
            className="write__input write__textarea"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="write__submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
