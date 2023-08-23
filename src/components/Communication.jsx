import React from 'react'
import BannerImage from '../assets/img/banner.png'
import '../styles/Communication.css'

export const Communication = () => {
    return (

        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${BannerImage})` }}
            ></div>
            <div className="rightSide">
                <h1>Bizimle İletişime Geçin</h1>
                <form>
                    <label>Ad Soyad</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Lütfen adınızı soyadınızı giriniz..."
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Lütfen emailinizi giriniz..."
                    />
                    <label>Mesajınız</label>
                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Lütfen mesajınızı giriniz..."
                    ></textarea>
                </form>
            </div>
        </div>

    )
}

export default Communication