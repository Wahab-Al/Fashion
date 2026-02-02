import SuitImg from '../../../assets/img/Categories/Promotions/suit.jpg'
import './PromotionBanner.css'

export default function PromotionBanner1() {
  return (
    <>
      <div className="promotion-div  w-100 py-5 px-1 mt-5">
        <div className="container d-block d-md-flex justify-content-center align-items-center">
          <div className='text-start'> 
            <h2 className="fw-bold">
              Bold & Action-Oriented
              <span className="discount d-block d-md-inline"> 30% Discount</span>
            </h2>
            <p className="text-muted">Visit our shop to see amazing creations from our designers.</p>
            <button className='btn btn-dark rounded-pill px-4 py-2'>Shop Now</button>
          </div>

          <div className="promotionImgDiv mt-4 mt-md-0">
            <img 
              src={SuitImg} 
              className='promotionImg img-fluid rounded-3 ms-md-5' 
              style={{ maxWidth: '430px', height: 'auto' }} 
              alt="Suits Promotion" 
            />
          </div>
        </div>
      </div>
    </>
  )
}

