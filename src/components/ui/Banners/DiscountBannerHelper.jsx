export default function DiscountBennerHelper({imagePosition='right', title, percent, text_description, imageUrl, img_alt_text, linkto}){
 const layoutRight = (
    <div className="promotion-div w-100 py-5 px-1 mt-5">
      <div className="container d-block d-md-flex justify-content-center align-items-center">
        <div className='text-start'> 
          <h2 className="fw-bold">
            {title}
            <span className="discount d-block d-md-inline"> {percent}% Discount</span>
          </h2>
          <p className="text-muted">{text_description}</p>
          <button className='btn promotion-banner-btn rounded-pill px-4 py-2'>Shop Now</button>
        </div>

        <div className="promotionImgDiv mt-4 mt-md-0">
          <img 
            src={imageUrl} 
            className='promotionImg img-fluid rounded-3 ms-md-5' 
            style={{ maxWidth: '430px', height: 'auto' }} 
            alt={img_alt_text}
          />
        </div>
      </div>
    </div>
  )
  const layoutLeft = (
    <div className="promotion-div w-100 py-5 px-1 mt-5">
      <div className="container d-block d-md-flex justify-content-center align-items-center">
        <div className="promotionImgDiv mt-4 mt-md-0 mb-2">
          <img 
            src={imageUrl} 
            className='promotionImg img-fluid rounded-3 me-md-5' 
            style={{ maxWidth: '430px', height: 'auto' }} 
            alt={img_alt_text}
          />
        </div>

        <div className='text-start'> 
          <h2 className="fw-bold">
            {title}
            <span className="discount d-block d-md-inline"> {percent}% Discount</span>
          </h2>
          <p className="text-muted">{text_description}</p>
          <button className='btn promotion-banner-btn rounded-pill px-4 py-2'>Shop Now</button>
        </div>
      </div>
    </div>
  )
  return imagePosition === 'right' ? layoutRight : layoutLeft;
}

