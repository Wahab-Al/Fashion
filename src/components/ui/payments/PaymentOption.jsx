import Apple from '../../../assets/img/payments/apple-pay.svg'
import MasterCard from '../../../assets/img/payments/mastercard.svg'
import Google from '../../../assets/img/payments/google-pay.svg'
import Paypal from '../../../assets/img/payments/paypal.svg'
import Bitcoin from '../../../assets/img/payments/bitcoin.svg'
import Visa from '../../../assets/img/payments/visa.svg'
import Klarna from '../../../assets/img/payments/klarna.svg'

import './paymentOption.css'

export default function PaymentOption() {
    return (
        <>
            <div className="container overflow-hidden d-flex align-items-center mt-5 mb-5">
                <div className="carousel-row overflow-x-scroll  flex-md-nowrap m-auto">
                    <div className="  flex-nowrap m-auto card border border-0 pt-3 mb-3" style={{ maxWidth: "50px", minWidth: "17px" }}>
                        <img className='rounded rounded-circle border border-1' src={Apple} alt="carousel-img" />
                    </div><div className="  flex-nowrap m-auto m-auto  card border border-0 mb-3" style={{ maxWidth: "50px", minWidth: "17px" }}>
                        <img className='rounded rounded-circle border border-1' src={MasterCard} alt="carousel-img" />
                    </div><div className="  flex-nowrap m-auto card border border-0 pt-3 mb-3" style={{ maxWidth: "50px", minWidth: "17px" }}>
                        <img className='rounded rounded-circle border border-1' src={Google} alt="carousel-img" />
                    </div><div className="  flex-nowrap m-auto card border border-0 pt-3 mb-3" style={{ maxWidth: "50px", minWidth: "17px" }}>
                        <img className='rounded rounded-circle border border-1' src={Paypal} alt="carousel-img" />
                    </div><div className="  flex-nowrap m-auto card border border-0 pt-3 mb-3" style={{ maxWidth: "50px", minWidth: "17px" }}>
                        <img className='rounded  rounded-circle border border-1' src={Bitcoin} alt="carousel-img" />
                    </div><div className="  flex-nowrap m-auto card border border-0 pt-3 mb-3" style={{ maxWidth: "50px", minWidth: "17px" }}>
                        <img className='rounded rounded-circle border border-1' src={Visa} alt="carousel-img" />
                    </div><div className="  flex-nowrap m-auto card border border-0 pt-3 mb-3" style={{ maxWidth: "50px", minWidth: "17px" }}>
                        <img className='rounded rounded-circle border border-1' src={Klarna} alt="carousel-img" />
                    </div>
                </div>
            </div>
        </>
    )
}
