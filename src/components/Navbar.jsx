import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <NavLink to='/homePage'>Home Page</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/aboutUs'>About Us</NavLink>
            <NavLink to='/communication'>Communication</NavLink>
        </nav>
    )
}

export default Navbar