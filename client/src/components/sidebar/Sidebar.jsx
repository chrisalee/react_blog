import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1620062110593-4b3c37545aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYWdvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          quisquam beatae quam sit. Ipsa voluptas incidunt vero perferendis,
          ullam repellendus recusandae nulla, blanditiis?
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="sidebar__listItem">Life</li>
          <li className="sidebar__listItem">Music</li>
          <li className="sidebar__listItem">Sports</li>
          <li className="sidebar__listItem">Style</li>
          <li className="sidebar__listItem">Tech</li>
          <li className="sidebar__listItem">TV / Cinema</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW US</span>
        <div className="sidebar__social">
          <span
            className="iconify sidebar__icon"
            data-icon="fa-brands:facebook-square"
          ></span>
          <span
            className="iconify sidebar__icon"
            data-icon="fa-brands:instagram"
          ></span>
          <span
            className="iconify sidebar__icon"
            data-icon="fa-brands:twitter"
          ></span>
          <span
            className="iconify sidebar__icon"
            data-icon="fa-brands:linkedin"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
