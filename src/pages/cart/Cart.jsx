import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cartImgBack from '../../assets/img/cart.jpg'
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import './cart.css';

//#region stripe 
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../components/ui/payment/CheckoutForm.jsx'
//#endregion


//initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Cart = () => {
  // Read initial state from localStorage 
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || []
  })

  const [showCheckout, setShowCheckout] = useState(false);

  const handlePaymentSuccess = () => {
    setCartItems([])
    setShowCheckout(false)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
    // Notify Navbar in case it needs to update the badge
    window.dispatchEvent(new Event('cartUpdated'))
  }, [cartItems])

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return (
      <>
        <NavbarBackground img={cartImgBack} />
        <div className="container cart-container pt-5 text-center">
          <div className="py-5 shadow-sm rounded-4 bg-light border-0 card">
            <div className="card-body">
              <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
              <h2 className="fw-bold">Your cart is empty</h2>
              <Link to="/" className="btn btn-lg text-white rounded-pill px-5 mt-3" style={{backgroundColor: '#ff7b00'}}>
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarBackground img={cartImgBack} />
      <div className="container cart-container pt-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h4 className="fw-bold mb-4">Shopping Cart</h4>
              {cartItems.map(item => (
                <div key={item.id} className="row item-in-cart align-items-center mb-4 pb-3 border-bottom">
                  <div className="col-2 img-cart">
                    <img src={item.main || item.img} className="img-fluid rounded" alt={item.title} />
                  </div>
                  <div className="col-4">
                    <h6 className="fw-bold mb-0">{item.title}</h6>
                    <small className="text-muted">{item.price}€</small>
                  </div>
                  <div className="col-3">
                    <div className="d-flex align-items-center border rounded-pill shadow-sm">
                      <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-sm border-0">-</button>
                      <span className="mx-auto fw-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-sm border-0">+</button>
                    </div>
                  </div>
                  <div className="col-2 text-end fw-bold" style={{color: 'rgb(255, 123, 0)'}}>
                    {item.price * item.quantity}€
                  </div>
                  <div className="col-1 text-end">
                    <button onClick={() => removeItem(item.id)} className="btn btn-sm text-danger border-0">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Order Summary & Payment Logic */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-light">
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-4 border-top pt-3">
                <span className="fw-bold fs-5">Total</span>
                <span className="fw-bold fs-5" style={{color: 'rgb(255, 123, 0)'}}>{subtotal}€</span>
              </div>
              {/** Show Checkout button OR Stripe Elements */}
              {!showCheckout ? (
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="btn w-100 rounded-pill py-3 fw-bold text-white shadow-sm border-0" 
                  style={{backgroundColor: '#ff7b00'}}
                >
                  Proceed to Checkout
                </button>
              ) : (
                //Wrap the form with Elements provider
                <Elements stripe={stripePromise}>
                  <CheckoutForm 
                    totalAmount={subtotal} 
                    cartItems={cartItems}
                    onSuccess={handlePaymentSuccess}
                    onCancel={() => setShowCheckout(false)}
                  />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;