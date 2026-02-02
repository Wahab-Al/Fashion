import collection from '../../../assets/img/top_header/collection/watch-man.png'
import collection1 from '../../../assets/img/top_header/collection/wom-with-bag.png'
import collection2 from '../../../assets/img/top_header/collection/man-complete-body.png'
import collection3 from '../../../assets/img/top_header/collection/kids.png'
import topHeader from '../../../assets/img/top_header/woman-suit.jpg'

import './main.css'
export default function MainI() {
  return (
    <>
        <div className='topHeader-bg'>
          <div id="carouselExampleAutoplaying" className="carousel slide carousel-left-topHeader" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={collection}
                    className="d-block w-100"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={collection1}
                    className="d-block w-100"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={collection2}
                    className="d-block w-100"
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={collection3}
                    className="d-block w-100"
                    alt="Third slide"
                  />
                </div>
              </div>
          </div>
          <div className='top-header-bg-right'>
            <img src={topHeader} className='top-header-bg-right-img' alt="" />
          </div>
        </div>
    </>
  )
}
