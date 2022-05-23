import { useContext } from "react";
import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App = () => {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/write" element={user ? <Write /> : <Login />} />
            <Route path="/settings" element={user ? <Settings /> : <Login />} />
            <Route path="/post/:id" element={<Single />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
