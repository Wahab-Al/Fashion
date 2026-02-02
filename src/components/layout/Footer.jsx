
// import PaymentOption from '../ui/payments/PaymentOption'
// import OurApps from '../ui/ourApps/OurApps'
import './Footer.css';
import LogFashion from '../../assets/img/LogFashion.png'
import { Link } from 'react-router';

export default function Footer() {
    return (
        <>
            {/* <OurApps /> 
            <PaymentOption /> */}
            <footer className="footer-section pt-5 pb-3 ">
            <div className="container">
                <div className="row mb-5">
                {/* Start: Brand Logo & Social Section */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <h2 className="footer-logo mb-3 text-uppercase fw-bold">
                        <a className="navbar-brand mt-1 fs-3" href="#">Fash<span><img className='LogoIconImg rounded' src={LogFashion} alt="LogoIcon" width={35} height={35}/></span>ion</a>
                    </h2>
                    <p className="footer-desc text-light mb-4">
                    Discover the ultimate destination for luxury apparel and trend-setting styles. Elevate your wardrobe with our curated collections of premium clothing, footwear, and accessories. Experience high-end fashion with global delivery.
                    </p>
                    <div className="social-icons d-flex gap-2">
                    <a href="#" target="_blank" className="social-link"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank" className="social-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" target="_blank" className="social-link"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" target="_blank" className="social-link"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                {/* End: Brand Logo & Social Section */}
                {/* Start: Promotion Banner Section */}
                <div className="col-lg-8 col-md-6 mb-4">
                    <div className="promo-banner-footer ps-lg-5">
                    <h4 className="text-white fw-bold mb-4">Women's Day Special Offer All Branded Sandals are <span className="text-orange">Flat 50% Discount</span></h4>
                    <div className="row">
                        {/* Start: Useful Links */}
                        <div className="col-md-6 mb-4">
                        <h5 className="text-white mb-3 text-uppercase small fw-bold">Useful Links</h5>
                        <ul className="list-unstyled footer-links row">
                            <div className="col-6">
                            <li><Link to={'/'} href="#">Home</Link></li>
                            <li><Link to={'/about'} href="#">About</Link></li>
                            <li><Link to={'/contact'} href="#">Contact</Link></li>
                            </div>
                            <div className="col-6">
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Support</a></li>
                            </div>
                        </ul>
                        </div>
                        {/* End: Useful Links */}
                        {/* Start: Store Info & Payment */}
                        <div className="col-md-6">
                        <h5 className="text-white mb-3 text-uppercase small fw-bold">Our Store</h5>
                        <p className="text-light small mb-4">29303 Bergen Kreis Celle, Deutschland</p>
                        <h5 className="text-white mb-3 text-uppercase small fw-bold">We Accept:</h5>
                        <div className="payment-icons d-flex gap-2">
                            <i className="fab fa-cc-visa text-white fs-2"></i>
                            <i className="fab fa-cc-mastercard text-white fs-2"></i>
                            <i className="fab fa-cc-paypal text-white fs-2"></i>
                            <i className="fab fa-cc-amex text-white fs-2"></i>
                        </div>
                        </div>
                        {/* End: Store Info & Payment */}
                    </div>
                    </div>
                </div>
                {/* End: Promotion Banner Section */}
                </div>
                {/* Start: Bottom Bar */}
                <div className="footer-bottom border-top pt-3 mt-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                    <ul className="list-inline mb-0 footer-bottom-links">
                        <li className="list-inline-item me-3"><a href="#">Privacy Policy</a></li>
                        <li className="list-inline-item me-3"><a href="#">Term of Service</a></li>
                        <li className="list-inline-item"><a href="#">Customer Care</a></li>
                    </ul>
                    </div>
                    <div className="col-md-6 text-md-end text-center mt-3 mt-md-0">
                    <p className="mb-0 text-light small allRights"><span>© </span>2026 <span className='text-uppercase'>Fashion</span>. All rights reserved. Design by Wahab</p>
                    </div>
                </div>
                </div>
                {/* End: Bottom Bar */}
            </div>
            </footer>
        </>
    );
}


