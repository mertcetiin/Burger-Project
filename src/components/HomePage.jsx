import React from 'react'
import BannerImage from '../assets/img/banneryeni.jpg'
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'


function HomePage() {

    const navigate = useNavigate();

    return (
        <div className='mainPage' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='order'>
                <button className='orderBtn' onClick={() => navigate('/menu')}>SİPARİŞ VER</button>
            </div>
        </div>
    )
}

export default HomePage