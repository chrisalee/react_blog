import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { UPDATE_FAILURE, UPDATE_START, UPDATE_SUCCESS } from "../../context/Constants";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./settings.css";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: UPDATE_START });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const response = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: UPDATE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_FAILURE });
    }
  };

  return (
    <div className="settings">
      <div className="settings__container">
        <div className="settings__title">
          <span className="settings__titleUpdate">Update Account</span>
          <span className="settings__titleDelete">Delete Account</span>
        </div>
        <form className="settings__form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings__profilePic">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : publicFolder + user.profilePicture
                }
                alt={user.username}
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
              onChange={(event) => setFile(event.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="name"
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="settings__submitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{
                color: "var(--clr-accent2)",
                alignSelf: "flex-end",
                marginTop: "20px",
              }}
            >
              Profile has been updated
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
