
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import './item.css'
import navBack from '../../assets/img/kidsFashion.jpg'

import { useParams } from 'react-router'
import { products } from '../../components/ui/carouselCards/CarouselCards'


//#region convert rating from number to stars icon 
const renderStars = (rating) => {
    if (!rating || rating <= 0) return null;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="stars bi bi-star-fill text-warning"></i>);
        } else if (i - 0.5 <= rating) {
            stars.push(<i key={i} className="stars bi bi-star-half text-warning"></i>);
        } else {
            stars.push(<i key={i} className="stars bi bi-star text-warning"></i>);
        }
    }
    return stars;
}
//#endregion

export default function Item() {
  const { slug } = useParams()
  const item = products.find(i => i.slug === slug)
  if(!item) {
    return <div className="container py-5 text-center"><h1>Item Not Found</h1></div>
  }
  return (
    <>
      <NavbarBackground img={navBack} />
      <div className="container item py-5">
        <div className="row item-wrapper align-items-center p-4">
          {/* Start: Image Section */}
          <div className="col-12 col-md-6">
            <div className="img-main-display mb-3">
              <img src={item.main} alt="Product" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="secondary-img-grid">
              <div className="secondary"><img src={item.subs[0]} alt="secondary" /></div>
              <div className="secondary"><img src={item.subs[1]} alt="secondary" /></div>
              <div className="secondary"><img src={item.subs[2]} alt="secondary" /></div>
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
          <div className="col-12 description-item-img col-md-6">
            <h4 className="fw-bold mb-3">{item.title}</h4>
            <div className="mb-3 d-flex align-items-center gap-2">
              <span className="fs-3 fw-bold text-orange" style={{color: '#ff7b00'}}>{item.price}€</span>
              <span className="text-muted text-decoration-line-through">{item.oldPrice}€</span>
              {item.rating > 0 ? (
                  <>
                    {renderStars(item.rating)}
                    <span className="text-warning stars">({item.rating})</span>
                  </>
                ) : (
                  <span className="text-muted small italic">No rating yet</span>
              )}
              {/* <span className="text-warning">
                {renderStars(item.rating)}
              </span> */}
            </div>
            <h5 className="fw-bold">Description:</h5>
            <p className="text-muted description-paragraph lh-lg">
              {item.description}
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

