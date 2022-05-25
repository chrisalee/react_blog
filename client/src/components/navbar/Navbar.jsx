import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { LOGOUT } from "../../context/Constants";
import "./navbar.css";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

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
          <div>
            <li className="list__item" onClick={handleLogout}>
              {user && LOGOUT}
            </li>
          </div>
        </ul>
      </div>
      <div className="navbar__right">
        <div>
        {user ? (
          <Link className="navbar__link" to="/settings">
            <img
              className="navbar__img"
              src={publicFolder + user.profilePicture}
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
        </div>
        <span
          className="iconify navbar__iconSearch"
          data-icon="fa-solid:search"
        ></span>
      </div>
    </div>
  );
};

export default Navbar;
