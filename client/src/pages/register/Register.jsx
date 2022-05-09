import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form">
        <label>Username</label>
        <input
          type="text"
          className="register__input"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          type="email"
          className="register__input"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="register__input"
          placeholder="Enter your password"
        />
        <button className="register__button">Register</button>
      </form>
      <Link to="/login">
        <button className="register__loginButton">
          Already a member, Login here
        </button>
      </Link>
    </div>
  );
};

export default Register;
