import Subs from '../../../assets/img/subscription.jpg'
import './Sub.css'

export default function Sub() {
  return (
    <>
      <div className="subContainer d-md-flex my-4">
        <div className="sub-form">
          <div className="sub-form-container container px-5 text-start">
            <h4 className='ms-1'>Join us for <span>FREE</span> to get instant <span>email updates!</span></h4>
            <p className='ms-1'>Subscribe and get notified at first on the latest update and offers!</p>
            <div className="inp-btn-container">
              <input type="text" placeholder=' your email here' className='join-inp ps-3 '/>
              <button className='join-btn'>join</button>
            </div>
          </div>
        </div>
        <div className="sub-img">
          <img src={Subs} className='' alt="" />
        </div>
      </div>
    </>
  )
}

