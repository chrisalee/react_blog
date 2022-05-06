import React from 'react';
import Navbar from './components/navbar/Navbar';
// import Single from './pages/single/Single';
// import Home from './pages/home/Home';
import Write from './pages/write/Write';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Write />
    </div>
  )
}

export default App