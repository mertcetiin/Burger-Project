import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navLink'>
            <NavLink to='/communication'>Communication</NavLink>
            <NavLink to='/aboutUs'>About Us</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/homePage'>Home Page</NavLink>
        </nav>
    )
}

export default Navbar