import Shoes from '../../../assets/img/Categories/shose.jpg'
import Suits from '../../../assets/img/Categories/suits.jpg'
import Fragrances from '../../../assets/img/Categories/fragrances.jpg'
import Watches from '../../../assets/img/Categories/watches.jpg'
import Bags from '../../../assets/img/Categories/bags.jpg'
import Accessories from '../../../assets/img/Categories/accessories.jpg'

import './categories.css'

export default function Categories () {
    return (
        <>
            <div className='container-fluid'>
                <h3 className='text-center'>Our <span className='categories-title'>Categories</span></h3>
                <div className='categories row justify-content-center align-items-center d-flex mt-4'>
                    <div className='col-4  col-md-3 col-lg-2 mb-2 '>
                        <img src={Suits} width={155} height={155}  alt="" className='category-img'/>
                        <h6 className='category-h6'>Suits</h6>
                    </div>
                    <div className='col-4  col-md-3 col-lg-2 mb-2 '>
                        <img src={Shoes} width={155} height={155}  alt="" className=' category-img'/>
                        <h6 className='category-h6'>Shoes</h6>
                    </div>
                    <div className='col-4  col-md-3 col-lg-2 mb-2 '>
                        <img src={Fragrances} width={155} height={155}  alt="" className='category-img '/>
                        <h6 className='category-h6'>Fragrances</h6>
                    </div>
                    <div className='col-4  col-md-3 col-lg-2 mb-2 '>
                        <img src={Watches} width={155} height={155}  alt="" className='category-img '/>
                        <h6 className='category-h6'>Watches</h6>
                    </div>
                    <div className='col-4  col-md-3 col-lg-2 mb-2 '>
                        <img src={Accessories} width={155} height={155}  alt="" className=' category-img'/>
                        <h6 className='category-h6'>Accessories</h6>
                    </div>
                    <div className='col-4  col-md-3 col-lg-2 mb-2 '>
                        <img src={Bags} width={155} height={155}  alt="" className=' category-img'/>
                        <h6 className='category-h6'>Bags</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

