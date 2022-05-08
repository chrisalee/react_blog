import React from 'react';
import Navbar from './components/navbar/Navbar';
// import Home from './pages/home/Home';
// import Single from './pages/single/Single';
// import Write from './pages/write/Write';
// import Settings from './pages/settings/Settings';
// import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Register />
    </div>
  )
}

export default App