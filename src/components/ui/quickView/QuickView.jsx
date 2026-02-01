
import './QuickView.css';
import WomanCoats from '../../../assets/img/quickViews/woman-coats1.jpg'
import MenJeans from '../../../assets/img/quickViews/MenJeans.jpg'
import MenShoes from '../../../assets/img/quickViews/MenShoes.jpg'
import Dress1 from '../../../assets/img/quickViews/dress1.jpg'
import babyClothes from '../../../assets/img/quickViews/babyClothes.jpg'
import babyShoes from '../../../assets/img/quickViews/babyShoes.jpg'
import womenJeans from '../../../assets/img/quickViews/womenJeans.jpg'
import Access from '../../../assets/img/quickViews/Access.jpg'
import { useNavigate } from 'react-router';


export default function QuickView() {
  const navigate = useNavigate()
  return (
    <>
      <div className="trending-Items-bg my-4">
        {/*  */}
        <section className="container-fluid trending-Items">
          <div className="card border-0 bg-black bg-gradient py-3 mb-3 text-center text-light shadow" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title text-uppercase fw-bold fs-3">
                <i className="bi bi-book-fill text-warning"></i> Our <span>Trending</span>  <i className="bi bi-book-fill text-warning"></i>
              </h5>
            </div>
          </div>
        </section>
        {/*  */}

        <div className="trending-Items-bg">
          <section className="w-100 d-flex flex-wrap justify-content-center align-items-center gap-2">
            
            {/*  */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={WomanCoats} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Elegant Evening Gown</h5>
                  {/* <a href="#" className="cart-btn btn btn-success mb-3 z-2">Cart</a> */}
                </div>
                <p className="card-text">Experience pure luxury with our silk-finish night collection.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

            {/*  */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={MenJeans} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Vintage Denim Jacket</h5>
                  {/* <a href="#" className="cart-btn btn btn-danger mb-3 z-2">Cart</a> */}
                </div>
                <p className="card-text">A timeless classic designed for the modern street-style enthusiast.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

            {/*  */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={MenShoes} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Leather Loafers</h5>
                  {/* <a href="#" className="cart-btn btn btn-primary mb-3 z-2">Cart</a> */}
                </div>
                <p className="card-text">Premium Italian leather meets ultimate everyday comfort.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

            {/*  */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={Dress1} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Floral Summer Mini</h5>
                  {/* <a href="#" className="cart-btn btn btn-success mb-3 z-2">Cart</a> */}
                </div>
                <p className="card-text">Light, breathable, and perfect for your next sunny getaway.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

            {/*  */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={babyClothes} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Minimalist Cotton Tee</h5>
                  {/* <a href="#" className="cart-btn btn btn-danger mb-3 z-2">Cart</a> */}
                </div>
                <p className="card-text">The foundation of every wardrobe. 100% organic premium cotton.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

            {/*  */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={babyShoes} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Urban Canvas Sneakers</h5>
                  {/* <a href="#" className="cart-btn btn btn-primary mb-3 z-2">Cart</a> */}
                </div>
                <p className="card-text">Versatile footwear designed to keep up with your city lifestyle.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

            {/*  */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={womenJeans} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Boho-Chic Knitwear</h5>
                  {/* <a href="#" className="cart-btn btn btn-outline-dark text-danger disabled mb-3 z-2">Sold</a> */}
                </div>
                <p className="card-text">Cozy up in style with our hand-knitted seasonal textures.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

            {/*   */}
            <div className="card item-card  position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
              <img src={Access} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title text-uppercase">Luxury Jewelry Box</h5>
                  {/* <button className="cart-btn btn btn-outline-dark text-danger disabled mb-3 z-2" disabled>Soon</button> */}
                </div>
                <p className="card-text">Organize your elegance with our premium velvet-lined cases.</p>
              </div>
              <button className='cart-btn-out'>Cart</button>
              <button className='view-btn-out' onClick={()=>navigate('/item')}>view</button>
            </div>

          </section>
        </div>
      </div>
    </>
  );
}