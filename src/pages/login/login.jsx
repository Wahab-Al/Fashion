import { useState } from 'react';
import backImg from '../../assets/img/About.jpg'
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground';
import './login.css'; 
import { useNavigate, Link, useLocation } from 'react-router';
import { userLogin } from '../../apis/authentication/authApi';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthContext';
import { Helmet } from 'react-helmet-async'





export default function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        email:'', password:''
    })
    
    const { login } = useAuth()

    const location = useLocation()
    const from = location.state?.from || '/'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            const response = await userLogin(user)
            login(response.data.data.user, response.data.data.token)
            
            await Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                timer: 1500,
                showConfirmButton: false
            })

            navigate(from)
        } catch (err) {
            setError(err.response?.data?.error || 'Invalid email or password')
        }
    }


    return (
        <>
            <Helmet>
                <title>Sign In Fashion Store</title>
                <meta name="description" content="Sign in to your Fashion Store account." />
            </Helmet>
            <NavbarBackground img={backImg}/>
            <main className='main-login-page'>
                <div className="container py-3 login__form-container">
                    <form className="border border-1 m-auto p-4 rounded-4 login-form-box shadow-lg" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4 login-title">Welcome Back</h2>
                        {error && (
                            <div className="alert alert-danger py-2 mb-3 text-center small" role="alert">
                                {error}
                            </div>
                        )}
                        <div className="mb-3 login-input-group">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control login-inp" 
                                id="email" 
                                placeholder="Enter email" 
                                required
                                value={user.email}
                                onChange={e => setUser({...user , email: e.target.value.toLowerCase()})}
                            />
                        </div>
                        <div className="mb-3 login-input-group">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control login-inp" 
                                id="pass" 
                                placeholder="Enter password" 
                                required
                                value={user.password}
                                onChange={e => setUser({...user, password: e.target.value})}
                            />
                        </div>
                        <div className="mb-3 form-check login-input-group d-flex align-items-center">
                            <input type="checkbox" className="form-check-input bg-dark  me-2" id="rememberMe" />
                            <label className="form-check-label fw-normal text-secondary" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-dark w-100 text-uppercase login-submit-btn py-2">
                            Sign In
                        </button>
                        <div className="mt-3 text-center text-secondary fw-normal">
                            No account yet? <Link to="/register" className="login-link text-decoration-none">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}