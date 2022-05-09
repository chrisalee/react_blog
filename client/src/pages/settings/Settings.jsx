import "./settings.css";
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
  return (
    <div className="settings"> 
      <div className="settings__container">
        <div className="settings__title">
          <span className="settings__titleUpdate">Update Account</span>
          <span className="settings__titleDelete">Delete Account</span>
        </div>
        <form className="settings__form">
          <label>Profile Picture</label>
          <div className="settings__profilePic">
            <img
              src="https://th.bing.com/th/id/OIP.u9GPbs7xbn0EO7XrcfipgAHaD5?w=285&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
              alt=""
            />
            <label htmlFor="fileInput">
              <span
                className="iconify settings__icon"
                data-icon="carbon:user-avatar-filled"
              ></span>
            </label>
            <input
              id="fileInput"
              type="file"
              className="settings__profilePicInput"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Chris L" name="name" />
          <label>Email</label>
          <input type="email" placeholder="chris@yahoo.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settings__submitButton">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
