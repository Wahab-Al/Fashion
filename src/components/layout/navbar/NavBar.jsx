import './navbar.css'
import LogFashion from '../../../assets/img/LogFashion.png'
import searchIcon from '../../../assets/img/icon-search.png'
import cartIcon from '../../../assets/img/icons-cart.png'
import fingerIcon from '../../../assets/img/icons-finger.png'
import userIcon from '../../../assets/img/icon-user.png'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'

export default function NavBar() {
    const [cartCount, setCartCount] = useState(0);
    const [currentUser, setCurrentUser] = useState(null);

    const updateNavData = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(total);
        const user = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(user);
    };
    useEffect(() => {
        updateNavData()
        
        const handleLogoutUI = () => {
        setCurrentUser(null); 
        setCartCount(0);      
    }
        window.addEventListener('cartUpdated', updateNavData)
        window.addEventListener('userLoggedOut', handleLogoutUI)
        window.addEventListener('userLoggedIn', updateNavData)
        return () => {
            window.removeEventListener('cartUpdated', updateNavData)
            window.removeEventListener('userLoggedOut', handleLogoutUI)
            window.removeEventListener('userLoggedIn', updateNavData)
        }   
    }, [])

    
    return (
        <>
            <div className='top-header'>
                <h6 className='top-header-h6 text-uppercase ms-2 p-1'>upto 30% off on all styles, <a href="" className='text-lowercase text-decoration-none text-dark'>Click Here For<img src={fingerIcon} width={20} height={20} alt=""/> <span className='top-header-link'>More Details</span></a></h6>
                <div className='top-header-right d-flex align-items-center'>
                    {currentUser ? (
                        <div className="d-flex align-items-center gap-2">
                            <span className="welcome-text small fw-bold">Hi, {currentUser.name}</span>
                            <Link to={'/logout'} className="text-danger small text-decoration-none">Logout</Link>
                        </div>
                    ) : (
                        <Link to={'/register'}>
                            <img src={userIcon} alt="Login" width={30} height={30} className='userIcon'/>
                        </Link>
                    )}
                    <Link to={'/cart'} className='top-btn-header rounded rounded-4 ms-2 position-relative'>
                        Cart
                        <img className='CartIconImg ms-1' src={cartIcon} alt="CartIcon" width={20} height={20}/>
                        {cartCount > 0 && (
                            <span className="cart-counter position-absolute top-0 translate-middle badge rounded-pill" 
                                style={{backgroundColor: 'rgb(255, 123, 0)', fontSize: '0.6rem'}}>
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-transparent mt-5">
                <div className="container-fluid">
                    <Link className="navbar-brand mt-1 fs-3" to={'/'}>Fash<span><img className='LogoIconImg rounded' src={LogFashion} alt="LogoIcon" width={35} height={35}/></span>ion</Link>
                    <form className="d-flex mt-1 search-form" role="search">  
                        <img className='searchIcon p-1 rounded' src={searchIcon} alt="LogoIcon" width={25} height={25}/>
                        <button className="btn btn-outline-transparent search-btn border border-0 ms-1" type="submit">Search</button>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container-fluid mt-3" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-list bg-transparent rounded ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mb-1">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item mb-1">
                                <Link className="nav-link " to={'/about'}>about</Link>
                            </li>
                            <li className="nav-item dropdown mb-1">
                                <a className="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    shopping
                                </a>
                                <ul className="dropdown-menu mb-1">
                                    <li><a className="dropdown-item" href="#">Tech loby</a></li>
                                    <li><a className="dropdown-item" href="#">Women & Men</a></li>
                                    
                                    <li><a className="dropdown-item" href="#">Teenager & Baby</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mb-1">
                                <Link className="nav-link" to={'/contact'}  aria-disabled="true">Contact</Link>
                            </li>
                        </ul>                   
                    </div>
                </div>
            </nav>
        </>
    )
}