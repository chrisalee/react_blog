import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../context/Constants';
import "./login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: LOGIN_START });
    try {
      const response = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data })
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE })
    }
  }

  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="username"
          className="login__input"
          placeholder="Enter Username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="login__input"
          placeholder="Enter Password"
          ref={passwordRef}
        />
        <button className="login__button" type="submit" disabled={isFetching}>Login</button>
      </form>
      <Link to="/register">
        <button className="login__registerButton">
          Not a member, Register here
        </button>
      </Link>
    </div>
  );
};

export default Login;
