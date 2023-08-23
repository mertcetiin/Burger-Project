import React from 'react'
import { Data } from '../helpers/Data.jsx'
import '../styles/Menu.css'


function Menu() {

    return (
        <div className='menu'>
            <h1 className='menuTitle'>Burgerlerimiz</h1>
            <div className='menuList'>
                {Data.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} />
                        <h1>{item.name}</h1>
                        <h4>{item.info}</h4>
                        <h2>{item.price}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;