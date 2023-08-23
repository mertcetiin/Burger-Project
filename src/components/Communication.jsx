import React from 'react'
import banner from '../assets/img/banner.png'

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
        </>
    )
}

export default Communication