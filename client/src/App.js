import React from 'react';
import Navbar from './components/navbar/Navbar';
// import Home from './pages/home/Home';
// import Single from './pages/single/Single';
// import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Settings />
    </div>
  )
}

export default App