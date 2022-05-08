import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label>Email</label>
        <input type="email" className="login__input" placeholder="Enter Email" />
        <label>Password</label>
        <input type="password" className="login__input" placeholder="Enter Password" />
        <button className="login__button">Login</button>
      </form>
      <button className="login__registerButton">Not a member, Register here</button>
    </div>
  );
};

export default Login;
