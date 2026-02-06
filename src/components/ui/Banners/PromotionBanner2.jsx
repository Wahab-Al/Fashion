import WomanBrands from '../../../assets/img/Categories/Promotions/wonan-brands.jpg'
import './PromotionBanner.css'

export default function PromotionBanner2() {
  return (
        <>
          <div className="promotion-div w-100 py-5 px-1 mb-5">
            <div className="container d-block d-md-flex justify-content-center align-items-center">
              <div className="promotionImgDiv mt-4 mt-md-0 mb-2">
                <img 
                  src={WomanBrands} 
                  className='promotionImg img-fluid rounded-3 me-md-5' 
                  style={{ maxWidth: '430px', height: 'auto' }} 
                  alt="Suits Promotion" 
                />
              </div>
              <div className='text-start'> 
                <h2 className="fw-bold">
                  Modern & Tech-Forward
                  <span className="discount d-block d-md-inline"> 60% Discount</span>
                </h2>
                <p className="text-muted">Visit our shop to see amazing creations from our designers.</p>
                <button className='btn promotion-banner-btn rounded-pill px-4 py-2'>Shop Now</button>
              </div>
            </div>
          </div>
        </>
  )
}