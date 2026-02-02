import { useState, useRef } from 'react'
import { Link } from 'react-router'
import './carouselCards.css'

//#region item images: 
import Dress from '../../../assets/img/products-carousel/dress.webp'
import Dress2 from '../../../assets/img/products-carousel/dress2.jpg'
import Dress3 from '../../../assets/img/products-carousel/dress3.jpg'

import Style1 from '../../../assets/img/products-carousel/style1.jpg'
import style1_1 from '../../../assets/img/products-carousel/style1_1.jpg'
import style1_2 from '../../../assets/img/products-carousel/style1_2.jpg'
import style1_4 from '../../../assets/img/products-carousel/style1_4.jpg'

import mstyle from '../../../assets/img/products-carousel/m-style.jpg'
import mstyle1 from '../../../assets/img/products-carousel/m-style1.jpg'
import mstyle3 from '../../../assets/img/products-carousel/m-style3.jpg'

import coat from '../../../assets/img/quickViews/woman-coats1.jpg'
import coat1 from '../../../assets/img/item/woman-coats2.jpg'
import coat2 from '../../../assets/img/item/woman-coats3.jpg'
import coat3 from '../../../assets/img/item/woman-coats4.jpg'

import WomanCoats from '../../../assets/img/quickViews/woman-coats1.jpg'
import MenJeans from '../../../assets/img/quickViews/menJeans.jpg'
import MenShoes from '../../../assets/img/quickViews/menShoes.jpg'
import Dress1 from '../../../assets/img/quickViews/dress1.jpg'
import babyClothes from '../../../assets/img/quickViews/babyClothes.jpg'
import babyShoes from '../../../assets/img/quickViews/babyShoes.jpg'
import womenJeans from '../../../assets/img/quickViews/womenJeans.jpg'
import Access from '../../../assets/img/quickViews/Access.jpg'
//#endregion

import Prev from '../../../assets/img/products-carousel/arrow-prev.svg'
import Next from '../../../assets/img/products-carousel/arrow-next.svg'

export const products = [
    { 
        id: 1, 
        title: 'Classic Fedora Hat', 
        main: Style1, 
        subs: [style1_2, style1_1, style1_4], 
        slug: 'black-hat', 
        price: 45, 
        oldPrice: 60, 
        rating: 4.5, 
        description: 'Classic black wool fedora hat perfect for a sophisticated autumn look.' 
    },
    { 
        id: 2, 
        title: 'Floral Maxi Dress', 
        main: Dress3, 
        subs: [Dress2, Dress, Dress2], 
        slug: 'long-brown-dress', 
        price: 120, 
        oldPrice: 150, 
        rating: 5, 
        description: 'Elegant long-sleeved floral maxi dress crafted from breathable silk blend.' 
    },
    { 
        id: 3, 
        title: 'Business Casual Blazer', 
        main: mstyle, 
        subs: [mstyle1, mstyle3, mstyle1], 
        slug: 'men-casual', 
        price: 270, 
        oldPrice: 320, 
        rating: 4, 
        description: 'Premium tailored black blazer paired with cotton chinos for a modern business-casual style.' 
    },
    { 
        id: 4, 
        title: 'Luxury Teddy Coat', 
        main: coat, 
        subs: [coat1, coat2, coat3], 
        slug: 'woman-brown-coat', 
        price: 100, 
        oldPrice: 180, 
        rating: 4.5, 
        description: 'Luxury oversized teddy coat in chocolate brown with ultra-soft faux fur lining.' 
    },
    { id: 5, 
        title: 'Urban Brimmed Hat', 
        main: Style1, 
        subs: [style1_2, style1_1, style1_4], 
        slug: 'black-hat2', 
        price: 45, 
        oldPrice: 55, 
        rating: 3.5, 
        description: 'Versatile black brimmed hat featuring a sleek minimalist design for daily wear.' },
    { id: 6, 
        title: 'Boho Summer Dress', 
        main: Dress3, 
        subs: [Dress2, Dress, Dress2], 
        slug: 'long-brown-dress2', 
        price: 120, 
        oldPrice: 140, 
        rating: 4.5, 
        description: 'Flowy bohemian style dress in earth tones, ideal for outdoor gatherings.' },
    { id: 7, 
        title: 'Slim-Fit Dark Jacket', 
        main: mstyle, 
        subs: [mstyle1, mstyle3, mstyle1], 
        slug: 'men-casual2', 
        price: 270, 
        oldPrice: 300, 
        rating: 5, 
        description: 'Sophisticated urban outfit featuring a slim-fit dark jacket and monochrome layers.' },
    { id: 8, 
        title: 'Insulated Winter Coat', 
        main: coat, 
        subs: [coat1, coat2, coat3], 
        slug: 'woman-brown-coat2', 
        price: 100, 
        oldPrice: 130, 
        rating: 0, 
        description: 'Warm insulated winter coat designed for extreme comfort and high-fashion appeal.' },

    { 
        id: 9, 
        title: "Elegant Evening Gown", 
        main: WomanCoats, 
        subs: [WomanCoats, WomanCoats, WomanCoats], 
        slug: "elegant-evening-gown", 
        price: 350, 
        oldPrice: 420, 
        rating: 4.9, 
        description: "Experience pure luxury with our silk-finish night collection, designed for high-end gala events." 
    },
    { 
        id: 10, 
        title: "Vintage Denim Jacket", 
        main: MenJeans, 
        subs: [MenJeans, MenJeans, MenJeans], 
        slug: "vintage-denim-jacket", 
        price: 85, 
        oldPrice: 115, 
        rating: 4.2, 
        description: "A timeless classic designed for the modern street-style enthusiast with rugged durability." 
    },
    { 
        id: 11, 
        title: "Leather Loafers", 
        main: MenShoes, 
        subs: [MenShoes, MenShoes, MenShoes], 
        slug: "leather-loafers", 
        price: 160, 
        oldPrice: 210, 
        rating: 4.7, 
        description: "Premium Italian leather meets ultimate everyday comfort in these handcrafted loafers." 
    },
    { 
        id: 12, 
        title: "Floral Summer Mini", 
        main: Dress1, 
        subs: [Dress1, Dress1, Dress1], 
        slug: "floral-summer-mini", 
        price: 65, 
        oldPrice: 85, 
        rating: 4.4, 
        description: "Light, breathable, and perfect for your next sunny getaway or beachside brunch." 
    },
    { 
        id: 13, 
        title: "Minimalist Cotton Tee", 
        main: babyClothes, 
        subs: [babyClothes, babyClothes, babyClothes], 
        slug: "minimalist-cotton-tee", 
        price: 25, 
        oldPrice: 35, 
        rating: 5, 
        description: "The foundation of every wardrobe. Crafted from 100% organic premium cotton." 
    },
    { 
        id: 14, 
        title: "Urban Canvas Sneakers", 
        main: babyShoes, 
        subs: [babyShoes, babyShoes, babyShoes], 
        slug: "urban-canvas-sneakers", 
        price: 70, 
        oldPrice: 90, 
        rating: 4.1, 
        description: "Versatile footwear designed to keep up with your dynamic city lifestyle." 
    },
    { 
        id: 15, 
        title: "Boho-Chic Knitwear", 
        main: womenJeans, 
        subs: [womenJeans, womenJeans, womenJeans], 
        slug: "boho-chic-knitwear", 
        price: 95, 
        oldPrice: 125, 
        rating: 4.6, 
        description: "Cozy up in style with our hand-knitted seasonal textures and relaxed fit." 
    },
    { 
        id: 16, 
        title: "Luxury Jewelry Box", 
        main: Access, 
        subs: [Access, Access, Access], 
        slug: "luxury-jewelry-box", 
        price: 110, 
        oldPrice: 150, 
        rating: 4.8, 
        description: "Organize your elegance with our premium velvet-lined cases, perfect for precious gems." 
    }
];
export default function CarouselCards() {

    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);


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

            {/* Slider Container */}
            <div className="card-container w-100 d-flex overflow-hidden justify-content-start align-items-center">
                <div 
                    ref={containerRef}
                    className="d-flex w-100" 
                    style={{ 
                        transform: `translateX(-${offset}px)`, 
                        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' 
                    }}
                >
                    {products.slice(0, 9).map((item) => (
                    <Link 
                            key={item.id} 
                            to={`/item/${item.slug}`}
                            className="card col-12 col-md-6 col-lg-3 col-xl-2 overflow-hidden m-3 pic border border-0 text-decoration-none text-reset"
                        >
                        <div className="row g-0 cardCarousel">
                            <div className="col-md-9 col-12 p-md-0 overflow-hidden bigImg-container">
                                <img src={item.main} className="img-fluid carousel-card-img-big w-100 h-100" alt="Main Product"/>
                            </div>
                            <div className="col-md-3 col-12 d-flex d-md-block overflow-hidden small-Img-container">
                                <div className="secondary-pics ms-md-1 mb-md-1 w-100 overflow-hidden">
                                    <img className='w-100 carousel-card-img-small' src={item.subs[0]} alt="Side 1" />
                                </div>
                                <div className="secondary-pics ms-md-1 w-100 overflow-hidden">
                                    <img className='w-100 carousel-card-img-small' src={item.subs[1]} alt="Side 2" />
                                </div>
                                <div className="secondary-pics ms-md-1 mt-md-1 w-100 overflow-hidden">
                                    <img className='w-100 carousel-card-img-small' src={item.subs[2]} alt="Side 3" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
    </div>

    {/* Arrow Right */}
        <div className="arrow-right" onClick={moveNext}>
            <img src={Next} alt="next" />
        </div>
    </div>
</>
    )}
