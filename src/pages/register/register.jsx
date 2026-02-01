import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import './register.css'
import navBack from '../../assets/img/kids1.jpg'
import { Link } from 'react-router'

export default function Register() {
    return (
        <>
            <NavbarBackground img={navBack} />
            <main className='main-register-page'>
                <div className="container py-3 register__form">
                    <form className="border border-1 m-auto p-4 rounded-4 text-light fw-bolder shadow-lg" style={{maxWidth: '500px'}}>
                        <h2 className="text-center mb-4 register-title">Create Account</h2>
                        {/* name & surname */}
                        <div className="row g-3 mb-3 input-container"> 
                            <div className="col-12 col-sm-6">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" className="form-control inp-bg" id="firstName" placeholder="Enter name"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="lastName" className="form-label">Surname</label>
                                <input type="text" className="form-control inp-bg" id="lastName" placeholder="Enter surname"/>
                            </div>
                        </div>
                        {/* city & ZIP */}
                        <div className="row g-3 mb-3 input-container">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="zipCode" className="form-label">ZIP</label>
                                <input type="text" className="form-control inp-bg" id="zipCode" placeholder="ZIP Code"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control inp-bg" id="city" placeholder="City"/>
                            </div>
                        </div>
                        {/* state */}
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control inp-bg" id="state" placeholder="Enter State"/>
                        </div>
                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control inp-bg" id="email" placeholder="Enter email"/>
                        </div>
                        {/* password */}
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control inp-bg" id="pass" placeholder="Enter password"/>
                        </div>
                        <button id='signUp-btn' type="submit" className="btn btn-dark w-100 text-uppercase signUp-btn py-2">
                            Sign Up
                        </button>
                        <div className="mt-3 text-center text-secondary fw-normal">
                            Already have an account? <Link to={'/login'} className="singin-link text-decoration-none hover-link">Sign In</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}