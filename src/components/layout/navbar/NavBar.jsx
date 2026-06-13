import './navbar.css'
import LogFashion from '../../../assets/img/LogFashion.png'
import searchIcon from '../../../assets/img/icon-search.png'
import cartIcon from '../../../assets/img/icons-cart.png'
import fingerIcon from '../../../assets/img/icons-finger.png'
import userIcon from '../../../assets/img/icon-user.png'
import { Link, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import { products } from '../../ui/carouselCards/CarouselCards'
import { useAuth } from '../../../context/AuthContext'
import { userLogout } from '../../../apis/authentication/authApi'
import Swal from 'sweetalert2'

export default function NavBar() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [cartCount, setCartCount] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const updateCart = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || []
            const total = cart.reduce((acc, item) => acc + item.quantity, 0)
            setCartCount(total)
        }
        updateCart()
        window.addEventListener('cartUpdated', updateCart)
        return () => window.removeEventListener('cartUpdated', updateCart)
    }, [])

    const handleLogout = async () => {
        try {
            await userLogout()
        } catch (err) {
            console.error('Logout error:', err)
        } finally {
            logout()
            await Swal.fire({
                icon: 'success',
                title: 'Logged out successfully',
                timer: 1500,
                showConfirmButton: false
            })
            navigate('/')
        }
    }

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        if (value.trim() === '') {
            setFilteredProducts([])
        } else {
            const results = products.filter(product =>
                product.title.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredProducts(results)
        }
    }

    return (
        <>
            <div className='top-header'>
                <h6 className='top-header-h6 text-uppercase ms-2 p-1'>
                    upto 30% off on all styles,
                    <a href="" className='text-lowercase text-decoration-none text-dark'>
                        Click Here For <img src={fingerIcon} width={20} height={20} alt=""/>
                        <span className='top-header-link'>More Details</span>
                    </a>
                </h6>
                <div className='top-header-right d-flex align-items-center'>
                    {user ? (
                        <div className="d-flex align-items-center gap-2">
                            <span className="welcome-text small fw-bold">Hi, {user.name}</span>
                            <button 
                                onClick={handleLogout}
                                className="btn btn-link text-danger small text-decoration-none p-0"
                            >
                                Logout
                            </button>
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
                    <Link className="navbar-brand mt-1 fs-3" to={'/'}>
                        Fash<span><img className='LogoIconImg rounded' src={LogFashion} alt="LogoIcon" width={35} height={35}/></span>ion
                    </Link>

                    <div className="search-container position-relative">
                        <form className="d-flex mt-1 search-form" role="search" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                className="form-control search-inp border-0 bg-transparent"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <img className='searchIcon p-1 rounded' src={searchIcon} alt="Search" width={25} height={25}/>
                        </form>

                        {filteredProducts.length > 0 && (
                            <ul className="search-dropdown list-unstyled position-absolute w-100 bg-white shadow rounded mt-1">
                                {filteredProducts.map(product => (
                                    <li key={product.id} className="p-2 border-bottom result-item">
                                        <Link
                                            to={`/item/${product.slug}`}
                                            className="text-decoration-none text-dark d-flex align-items-center"
                                            onClick={() => {setFilteredProducts([]); setSearchTerm('');}}
                                        >
                                            <img src={product.main} width={30} height={30} className="me-2 rounded" alt={product.title}/>
                                            <span className="small">{product.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse container-fluid mt-3" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-list bg-transparent rounded ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mb-1"><Link className="nav-link active" to={'/'}>Home</Link></li>
                            <li className="nav-item mb-1"><Link className="nav-link" to={'/about'}>about</Link></li>
                            <li className="nav-item dropdown mb-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">shopping</a>
                                <ul className="dropdown-menu mb-1">
                                    <li><a className="dropdown-item" href="#">Tech loby</a></li>
                                    <li><a className="dropdown-item" href="#">Women & Men</a></li>
                                    <li><a className="dropdown-item" href="#">Teenager & Baby</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mb-1"><Link className="nav-link" to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}