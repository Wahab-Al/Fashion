import React from 'react'
import Categories from '../categories/Categories'
import TopSales from '../topSales/TopSales'
import Grid from '../gridlayout/Grid'
// import PaymentOption from '../payments/PaymentOption'
import ShopWithUsCarousel from '../shopWithUsCarousel/ShopWithUsCarousel'


export default function Hero() {
    return (
        <>
            <Categories />
            <TopSales />
            <ShopWithUsCarousel />
        </>
    )
}