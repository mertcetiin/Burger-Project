import React from 'react'
import banneryeni from '../assets/img/banneryeni.jpg'
import { useNavigate } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

function HomePage() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='homeDiv'>
                <img className='bannerYeni' src={banneryeni} />
                <button className='orderBtn' onClick={() => navigate('/menu')}>Sipariş Ver</button>
            </div>

            <div className='footer-icons'>
                <h1><AiFillFacebook /></h1>
                <h1><AiFillInstagram /></h1>
                <h1><FaTwitter /></h1>
            </div>
            <h3 className='footer-h3'>Tüm hakları saklıdır | BurgerYiyelim</h3>

        </div>
    )
}

export default HomePage