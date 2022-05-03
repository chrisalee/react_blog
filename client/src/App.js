import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App