import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;

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
          <li className="list__item">
            <Link className="navbar__link" to="/">
              HOME
            </Link>
          </li>
          <li className="list__item">
            <Link className="navbar__link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="list__item">
            <Link className="navbar__link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="list__item">
            <Link className="navbar__link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="list__item">
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        {user ? (
          <Link className="navbar__link" to="/settings">
            <img
              className="navbar__img"
              src="https://images.pexels.com/photos/11189048/pexels-photo-11189048.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
          </Link>
        ) : (
          <ul className="navbar__list">
            <li className="list__item">
              <Link className="navbar__link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="list__item">
              <Link className="navbar__link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <span
          className="iconify navbar__iconSearch"
          data-icon="fa-solid:search"
        ></span>
      </div>
    </div>
  );
};

export default Navbar;
