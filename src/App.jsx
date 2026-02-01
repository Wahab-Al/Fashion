import './index.css'
import './App.css'
import NavBar from './components/layout/navbar/NavBar'
import Hero from './components/ui/hero/Hero'
import Grid from './components/ui/gridlayout/Grid'
import CarouselCards from './components/ui/carouselCards/CarouselCards'
import WhyFashion from './components/ui/whyFashion/whyFashion'
import Footer from './components/layout/Footer'
import MainI from './components/layout/main/MainI'
import PromotionBanner1 from './components/ui/Banners/PromotionBanner1'
import PromotionBanner2 from './components/ui/Banners/PromotionBanner2'
import Premium from './components/ui/Premium/Premium'
import Promo from './components/ui/promo/Promo'
import Customer from './components/ui/customer/Customer'
import Sub from './components/ui/subscription/Sub'
import QuickView from './components/ui/quickView/QuickView'


import { Route, Routes } from 'react-router'

import React, { Suspense, lazy } from 'react';


const Register = lazy(() => import('./pages/register/register'));
const Login = lazy(() => import('./pages/login/login'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const About = lazy(() => import('./pages/about/About'));
const Item = lazy(() => import('./pages/item/Item'));
const Cart = lazy(() => import('./pages/cart/Cart'));

function App() {
  
  return (
    <>
      <NavBar />
      <Suspense fallback={
        <div className="loading-container">
          <div className="spinner-border custom-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="mt-3 fw-light text-secondary">Getting things ready...</h5>
        </div>
      }>
        <Routes>
          <Route path='/' element={
            <>
              <MainI />
              <Hero />
              <QuickView />
              <Grid />
              <CarouselCards />
              <PromotionBanner1 />
              <Promo />
              <PromotionBanner2 />
              <Premium />
              <Customer />
              <WhyFashion />
              <Sub />
            </>
          }/>
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/item' element={<Item />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
