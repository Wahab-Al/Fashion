
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import './item.css'
import navBack from '../../assets/img/kidsFashion.jpg'

import style from '../../assets/img/quickViews/woman-coats1.jpg'
import style1 from '../../assets/img/item/woman-coats2.jpg'
import style2 from '../../assets/img/item/woman-coats3.jpg'
import style3 from '../../assets/img/item/woman-coats4.jpg'

export default function Item() {
  return (
    <>
      <NavbarBackground img={navBack} />
      <div className="container item py-5">
        <div className="row item-wrapper align-items-center g-5">
          {/* Start: Image Section */}
          <div className="col-12 col-md-6">
            <div className="img-main-display mb-3">
              <img src={style} alt="Product" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="secondary-img-grid">
              <div className="secondary"><img src={style1} alt="secondary" /></div>
              <div className="secondary"><img src={style2} alt="secondary" /></div>
              <div className="secondary"><img src={style3} alt="secondary" /></div>
            </div>
            <div className="counter w-25 my-3">
              <input type="number" min={1} defaultValue={1} className="counter-inp" />
            </div>
            <div className="item-btns d-flex gap-2 mt-4">
              <button className="btn btn-dark flex-grow-1 py-2">Add To Cart</button>
              <button className="btn btn-orange flex-grow-1 py-2 text-white" style={{backgroundColor: '#ff7b00'}}>Buy Now</button>
            </div>
          </div>
          {/* End: Image Section */}
          {/* Start: Description Section */}
          <div className="col-12 col-md-6">
            <h4 className="fw-bold mb-3">New Woman Coat</h4>
            <div className="mb-3 d-flex align-items-center gap-3">
              <span className="fs-3 fw-bold text-orange" style={{color: '#ff7b00'}}>500€</span>
              <span className="text-muted text-decoration-line-through">700€</span>
              <span className="text-warning">
                <i className="stars bi bi-star-fill"></i>
                <i className="stars bi bi-star-fill"></i>
                <i className="stars bi bi-star-fill"></i>
                <i className="stars bi bi-star-fill"></i>
                <i className="stars bi bi-star-half"></i>
              </span>
            </div>
            <h5 className="fw-bold">Description:</h5>
            <p className="text-muted description-paragraph lh-lg">
              This high-quality men's coat is designed for both style and durability. 
              Perfect for professional and casual settings, featuring weather-resistant 
              fabrics and a modern tailored fit.
            </p>
            <div className="coupon-section mt-5 p-4 bg-light rounded shadow-sm">
              <h6 className="fw-bold text-start">Have a Coupon? Check it now</h6>
              <div className="d-flex mt-3">
                <input type="text" placeholder="Enter your Coupon" className="form-control rounded-0 rounded-start" />
                <button className="btn btn-dark rounded-0 rounded-end px-4">Check</button>
              </div>
            </div>
          </div>
          {/* End: Description Section */}
        </div>
      </div>
    </>
  )
}

