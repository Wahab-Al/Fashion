import React from 'react'
import './carousel.css'
import Iphone from '../../../assets/img/products/iphone.webp'
import Laptop from '../../../assets/img/products/laptop.webp'
import Break from '../../../assets/img/products/break.webp'
import Pullover from '../../../assets/img/products/pullover.webp'
import Lamp from '../../../assets/img/products/lamp.webp'
import Sneaker from '../../../assets/img/products/sneaker.webp'
import Lego from '../../../assets/img/products/lego.webp'


export default function ShopWithUsCarousel() {
    const shopItems = [
        { id: 1, img: Iphone, name: "Iphone" },
        { id: 2, img: Laptop, name: "Laptop" },
        { id: 3, img: Break, name: "Break" },
        { id: 4, img: Pullover, name: "Pullover" },
        { id: 5, img: Lamp, name: "Lamp" },
        { id: 6, img: Sneaker, name: "Sneaker" },
        { id: 7, img: Lego, name: "Lego" },
    ];
    return (
        <div className="container">
            <h2 className='text-center'>
                SHOP WITH <span className='Shop-with-us-title'>US</span>
            </h2>
            <div className="wrapper">
                {shopItems.map((item, index) => (
                <div key={item.id} className={`carousel-card item${index + 1}`}>
                    <img 
                    className='object-fit-contain mt-1' 
                    src={item.img} 
                    alt={item.name} 
                    />
                </div>
                ))}
            </div>
        </div>
    )
}



