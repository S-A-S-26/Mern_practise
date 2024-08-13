import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex flex-col h-screen'>
      <BrowserRouter>
        <div>
          <Navbar/>
        </div>
        <div className='grow'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/reg' element={<Registration/>}/>
          </Routes>
        </div>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
