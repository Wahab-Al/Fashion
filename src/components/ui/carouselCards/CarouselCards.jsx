import React, { useState, useRef } from 'react'
import './carouselCards.css'
import Dress from '../../../assets/img/products-carousel/dress.webp'
import Dress2 from '../../../assets/img/products-carousel/dress2.avif'
import Dress3 from '../../../assets/img/products-carousel/dress3.avif'

import Style1 from '../../../assets/img/products-carousel/style1.jpg'
import style1_1 from '../../../assets/img/products-carousel/style1_1.jpg'
import style1_2 from '../../../assets/img/products-carousel/style1_2.avif'
import style1_4 from '../../../assets/img/products-carousel/style1_4.jpg'

import mstyle from '../../../assets/img/products-carousel/m-style.jpg'
import mstyle1 from '../../../assets/img/products-carousel/m-style1.jpg'
import mstyle3 from '../../../assets/img/products-carousel/m-style3.jpg'

import coat from '../../../assets/img/quickViews/woman-coats1.jpg'
import coat1 from '../../../assets/img/item/woman-coats2.jpg'
import coat2 from '../../../assets/img/item/woman-coats3.jpg'
import coat3 from '../../../assets/img/item/woman-coats4.jpg'


import Prev from '../../../assets/img/products-carousel/arrow-prev.svg'
import Next from '../../../assets/img/products-carousel/arrow-next.svg'

import { useNavigate } from 'react-router'



export default function CarouselCards() {

    const navigate = useNavigate()
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);

    // Logic to calculate how much to move based on the container width
    const moveNext = () => {
        if (containerRef.current) {
            const visibleWidth = containerRef.current.offsetWidth;
            const totalWidth = containerRef.current.scrollWidth;
            const maxScroll = totalWidth - visibleWidth;
            
            setOffset((prev) => {
                const nextOffset = prev + (visibleWidth / 2); 
                return nextOffset > maxScroll ? 0 : nextOffset; 
            });
        }
    };

    const movePrev = () => {
        if (containerRef.current) {
            const visibleWidth = containerRef.current.offsetWidth;
            setOffset((prev) => {
                const nextOffset = prev - (visibleWidth / 2);
                return nextOffset < 0 ? 0 : nextOffset;
            });
        }
    };

    return (
        <>
            <div className="container mt-5 mb-md-1 mt-md-5">
                <h3 className='text-center mb-4'>top <span className='Carousel-cards-title'>SALES</span> this month</h3>
                
                {/* Arrow Left */}
                <div className="arrow-left" onClick={movePrev}>
                    <img src={Prev} alt="previous" />
                </div>

                <div className="card-container w-100 d-flex overflow-hidden justify-content-start align-items-center ga">
                    {/* The Sliding Wrapper */}
                    <div 
                        ref={containerRef}
                        className="d-flex w-100" 
                        style={{ 
                            transform: `translateX(-${offset}px)`, 
                            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' 
                        }}
                    >
                        {/* Start Card 1 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={Style1} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={style1_2} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={style1_1} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={style1_4} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        {/* End Card 1 */}

                        {/* Card 2 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={Dress3} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={Dress2} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={Dress} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={Dress2} alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={mstyle} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={mstyle1} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={mstyle3} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={mstyle1} alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={coat} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={coat1} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={coat2} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={coat3} alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Start Card 5 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={Style1} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={style1_2} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={style1_1} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={style1_4} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        {/* End Card 5 */}

                        {/* Card 6 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={Dress3} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={Dress2} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={Dress} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={Dress2} alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={mstyle} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={mstyle1} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={mstyle3} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={mstyle1} alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Card 8 */}
                        <div className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0" onClick={()=>navigate('/item')}>
                            <div className="row g-0 cardCarousel">
                                <div className="col-md-9 col-12  p-md-0 overflow-hidden bigImg-container">
                                    <img src={coat} className="img-fluid  w-100 h-100" alt="..."/>
                                </div>
                                <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                    <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden"><img className='w-100' src={coat1} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 w-100 overflow-hidden"><img className='w-100' src={coat2} alt="" /></div>
                                    <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden"><img className='w-100' src={coat3} alt="" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Arrow Right */}
                <div className="arrow-right" onClick={moveNext}>
                    <img src={Next} alt="next" />
                </div>
            </div>
        </>
    )
}