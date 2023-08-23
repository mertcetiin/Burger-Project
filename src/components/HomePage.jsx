import React from 'react'
import banneryeni from '../assets/img/banneryeni.jpg'
import burgerlogo from '../assets/img/burgerlogo.png'
import { useNavigate } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

function HomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <img className='burgerLogo' src={burgerlogo} />
            <img className='bannerYeni' src={banneryeni} />
            <button onClick={() => navigate('/menu')}>Sipariş Ver</button>

            <div className='footer-icons'>
                <h1><AiFillFacebook /></h1>
                <h1><AiFillInstagram /></h1>
                <h1><FaTwitter /></h1>
                <h3>Tüm hakları saklıdır | BurgerYiyelim</h3>
            </div>
        </div>
    )
}

export default HomePage