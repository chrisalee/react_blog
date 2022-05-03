import "./navbar.css";
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <span
          className="iconify navbar__icon"
          data-icon="fa-brands:facebook-square"
        ></span>
        <span
          className="iconify navbar__icon"
          data-icon="fa-brands:instagram"
        ></span>
        <span
          className="iconify navbar__icon"
          data-icon="fa-brands:twitter"
        ></span>
        <span
          className="iconify navbar__icon"
          data-icon="fa-brands:linkedin"
        ></span>
      </div>
      <div className="navbar__center">
        <ul className="navbar__list">
          <li className="list__item">HOME</li>
          <li className="list__item">ABOUT</li>
          <li className="list__item">CONTACT</li>
          <li className="list__item">WRITE</li>
        </ul>
      </div>
      <div className="navbar__right">
        <img
          className="navbar__img"
          src="https://images.pexels.com/photos/11189048/pexels-photo-11189048.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
        <ul className="navbar__list">
          <li className="list__item">LOGIN</li>
          <li className="list__item">REGISTER</li>
        </ul>
        <span className="iconify navbar__iconSearch" data-icon="fa-solid:search"></span>
      </div>
    </div>
  );
};

export default Navbar;
