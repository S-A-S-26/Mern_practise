import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reg' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
