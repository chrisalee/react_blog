import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      response.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="register__input"
          placeholder="Enter your username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="register__input"
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="register__input"
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="register__button" type="submit">
          Register
        </button>
      </form>
      <Link to="/login">
        <button className="register__loginButton">
          Already a member, Login here
        </button>
      </Link>
      {error && <span style={{ color: "#ee0f0f", marginTop: "10px" }}>Please fill out all fields.</span>}
    </div>
  );
};

export default Register;
