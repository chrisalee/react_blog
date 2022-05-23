import "./settings.css";
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { UPDATE_START, UPDATE_SUCCESS } from "../../context/Constants";
import axios from "axios";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const publicFolder = 'http://localhost:5000/images/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: UPDATE_START });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post('/upload', data);
      } catch (error) {}
    }
    try {
      const response = await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: UPDATE_SUCCESS, payload: response.data });
    } catch (error) {
      
    }
  }

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
