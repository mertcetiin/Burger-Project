import React from 'react'
import banneryeni from '../assets/img/banneryeni.jpg'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

function AboutUs() {
    return (
        <div className='aboutusDiv'>
            <img className='bannerYeni' src={banneryeni} />
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='footer-icons'>
                <h1><AiFillFacebook /></h1>
                <h1><AiFillInstagram /></h1>
                <h1><FaTwitter /></h1>
            </div>
            <h3 className='footer-h3'>Tüm hakları saklıdır | BurgerYiyelim</h3>
        </div>
    )
}

export default AboutUs