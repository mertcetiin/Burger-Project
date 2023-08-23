import React from 'react'
import { NavLink } from 'react-router-dom'
import burgerlogo from '../assets/img/burgerlogo.png'

function Navbar() {
    return (
        <nav className='navLink'>
            <img className='burgerLogo' src={burgerlogo} />
            <NavLink to='/communication'>Communication</NavLink>
            <NavLink to='/aboutUs'>About Us</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/homePage'>Home Page</NavLink>
        </nav>
    )
}

export default Navbar