import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import './register.css'
import navBack from '../../assets/img/kids1.jpg'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import { userRegister } from '../../apis/authentication/authApi'
import Swal from 'sweetalert2'
import { useAuth } from '../../context/AuthContext'
import { Helmet } from 'react-helmet-async'




export default function Register(){
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        name:'', surname:'', email:'', password:''
    })

    const navigate = useNavigate()

    const { login } = useAuth()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')

        try {
            const response = await userRegister(user)

            login(response.data.data.user)

            await Swal.fire({
                icon: 'success',
                title: 'Registration successful!',
                text: 'Welcome to Fashion Store',
                timer: 2000,
                showConfirmButton: false
            })
            navigate('/')
        } catch (error) {
            setError(error.response?.data?.error || `Registration failed. Please try again`)
        }
    }

    return (
        <>
            <Helmet>
                <title>Create Account Fashion Store</title>
                <meta name="description" content="Create your Fashion Store account and start shopping." />
            </Helmet>
            <NavbarBackground img={navBack} />
            <main className='main-register-page'>
                <div className="container py-3 register__form">
                    <form className="border border-1 m-auto p-4 rounded-4 text-light fw-bolder shadow-lg" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4 register-title">Create Account</h2>
                        {error && (
                            <div className="alert alert-danger py-2 mb-3 text-center small" role="alert">
                                {error}
                            </div>
                        )}
                        <div className="row g-3 mb-3 input-container">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" className="form-control inp-bg" id="firstName" required placeholder="Enter name" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="lastName" className="form-label">Surname</label>
                                <input type="text" className="form-control inp-bg" id="lastName" required placeholder="Enter surname" value={user.surname} onChange={e => setUser({...user, surname: e.target.value})}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control inp-bg" id="email" required placeholder="Enter email" value={user.email} onChange={e => setUser({...user, email: e.target.value.toLowerCase()})}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control inp-bg" id="pass" required placeholder="Enter password" value={user.password} onChange={e => setUser({...user, password: e.target.value})}/>
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