import React from 'react'
import { NavLink } from 'react-router-dom'
import burgerlogo from '../assets/img/burgerlogo.png'
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='main'>
                <img className='burgerLogo' src={burgerlogo} />
                <div className='mainLink'>
                    <NavLink to='/homePage'>Home Page</NavLink>
                    <NavLink to='/menu'>Menu</NavLink>
                    <NavLink to='/aboutUs'>About Us</NavLink>
                    <NavLink to='/communication'>Communication</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar