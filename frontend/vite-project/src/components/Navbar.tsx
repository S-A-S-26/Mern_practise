import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center list-none h-[2rem] sticky top-0'>
        <div>Logo</div>
        <div className='flex gap-9'>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/reg'>Register</NavLink></li>
        </div>
    </nav>
  )
}
