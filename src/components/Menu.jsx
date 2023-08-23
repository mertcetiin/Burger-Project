import React from 'react'
import burger from '../assets/img/burger.jpg'


function Menu() {

    const burgerMenu = [
        {
            id: 1,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 2,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 3,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 4,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 5,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 6,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 7,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 8,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 9,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 10,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 11,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },
        {
            id: 12,
            img: '',
            name: 'Efso Burger',
            info: '150 gr kasap Burger,Patates,Turşu',
            price: '250 TL'
        },

    ]

    return (
        <div className='menuDiv'>
            <h1 className='menu-h1'>Burgerlerimiz</h1>
            {burgerMenu.map((item) => (
                <div className='menuCard' key={item.id}>
                    <img src={burger} />
                    <h1>{item.name}</h1>
                    <h4>{item.info}</h4>
                    <h2>{item.price}</h2>
                </div>
            ))}
        </div>

    )
}

export default Menu