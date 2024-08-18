import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-with-shadow.png'

export default function Navbar({isLoggedIn,setLogged}:{isLoggedIn:boolean,setLogged:(value:boolean)=>void}) {

  const navigate = useNavigate()

  function logoutUser(){
    localStorage.removeItem("token")
    setLogged(false)
    navigate('/login')
  }

  return (
    <nav className='flex justify-around items-center list-none h-[2rem] sticky top-0 p-[2rem] bxshb'>
        <div className='flex items-center justify-center h-9 w-9'><img src={logo} /><b>Vite</b></div>
        <div className='flex gap-9 items-center'>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            {!isLoggedIn ?
              <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/reg'>Register</NavLink></li>
              </>
              :
              <li>
                <button className='bg-transparent text-[#646cff] p-0 m-0 border-none' onClick={logoutUser}>
                  Logout
                </button>
              </li>

            }
        </div>
    </nav>
  )
}
