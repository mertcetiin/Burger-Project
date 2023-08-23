import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <AiFillFacebook />
                <AiFillInstagram />
                <FaTwitter />
            </div>
            <p>Tüm hakları saklıdır | BurgerYiyelim</p>
        </div>
    )
}

export default Footer