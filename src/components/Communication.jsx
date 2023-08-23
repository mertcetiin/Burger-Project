import React from 'react'
import banner from '../assets/img/banner.png'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

function Communication() {
    return (
        <>
            <div className='communcationDiv'>
                <img src={banner} />
                <h1>Bizimle İletişime Geçin</h1>
                <div className='inputDiv'>
                    <label>Ad Soyad</label>
                    <input placeholder='Lütfen adınızı soyadınızı giriniz...' />
                    <label>Email</label>
                    <input placeholder='Lütfen emailinizi giriniz...' />
                    <label>Mesajınız</label>
                    <textarea placeholder='Lütfen mesajınızı giriniz...' />
                    <button>Gönder</button>
                </div>
            </div>
            <div className='footer-icons'>
                <h1><AiFillFacebook /></h1>
                <h1><AiFillInstagram /></h1>
                <h1><FaTwitter /></h1>
            </div>
            <h3 className='footer-h3'>Tüm hakları saklıdır | BurgerYiyelim</h3>
        </>
    )
}

export default Communication