import { useState } from 'react';
import { Link } from 'react-router-dom';
import woman_coat from '../../assets/img/quickViews/woman-coats1.jpg'
import cartImgBack from '../../assets/img/cart.jpg'
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground';
import './cart.css'

const Cart = () => {
  // Mock data for testing state updates
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Brown Woman Coat', price: 299, quantity: 1, img:  woman_coat}
  ]);
  // Logic to update quantity
  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };
  // Logic to remove item
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  if (cartItems.length === 0) {
    return (
      <>
        <NavbarBackground img={cartImgBack} />
        <div className="container cart-container pt-5 text-center" id=''>
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
      <div className="container cart-container pt-5" id=''>
        <div className="row g-4" id=''>
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h4 className="fw-bold mb-4">Shopping Cart</h4>
              {cartItems.map(item => (
                <div key={item.id} className="row align-items-center mb-4 pb-3 border-bottom">
                  <div className="col-2">
                    <img src={item.img} className="img-fluid rounded" alt={item.name} />
                  </div>
                  <div className="col-4">
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                    <small className="text-muted">${item.price}</small>
                  </div>
                  <div className="col-3">
                    <div className="d-flex align-items-center border rounded-pill shadow-sm">
                      {/* Active State Update: Decrease */}
                      <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-sm border-0">-</button>
                      <span className="mx-auto fw-bold">{item.quantity}</span>
                      {/* Active State Update: Increase */}
                      <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-sm border-0">+</button>
                    </div>
                  </div>
                  <div className="col-2 text-end fw-bold text-orange">
                    ${item.price * item.quantity}
                  </div>
                  <div className="col-1 text-end">
                    {/* Active State Update: Remove */}
                    <button onClick={() => removeItem(item.id)} className="btn btn-sm text-danger border-0">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
              {/* Summary Sidebar - Same as before */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-light">
                  <h5 className="fw-bold mb-4">Order Summary</h5>
                  <div className="d-flex justify-content-between mb-4 border-top pt-3">
                      <span className="fw-bold fs-5">Total</span>
                      <span className="fw-bold fs-5 text-orange">${subtotal}</span>
                  </div>
                  <button className="btn w-100 rounded-pill py-3 fw-bold text-white shadow-sm border-0" style={{backgroundColor: '#ff7b00'}}>
                      Checkout
                  </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;