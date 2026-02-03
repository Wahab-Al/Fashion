import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import './register.css'
import navBack from '../../assets/img/kids1.jpg'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'

export default function Register() {

    const [error, setError] = useState('')

    const [user, setUser] = useState({
        name:'', surname:'', email:'', password: '', zipCode: '', city:'', state:''
    })
    const navigate = useNavigate()
    const handleInputChange = (e)=>{
        e.preventDefault()
        setError('')

        // get existing users from localStorage if no users it will be empty array
        const users = JSON.parse(localStorage.getItem('users')) || []
        
        // check user and password
        if(!user.email.trim() || !user.password.trim()){
            setError('Please fill in both email and password fields.');
            return
        }
        
        // check if email is already exist 
        if(users.some(u => u.email.toLowerCase() === user.email.toLowerCase())){
            setError('This email is already registered. Please try logging in.')
            return
        }

        // add id to user: 
        const userWithId = {
            ...user, id: crypto.randomUUID() // or: Date.now()
        }
        users.push(userWithId)

        // save back to localStorage
        localStorage.setItem('users', JSON.stringify(users))

        // navigate to login page:
        navigate('/login')
        // rest inputs: 
        setUser({ name:'', surname:'', email:'', password: '', zipCode: '', city:'', state:''})
        console.log(`${JSON.stringify(userWithId)} is registered`)
    }


    return (
        <>
            <NavbarBackground img={navBack} />
            <main className='main-register-page'>
                <div className="container py-3 register__form">
                    <form className="border border-1 m-auto p-4 rounded-4 text-light fw-bolder shadow-lg" style={{maxWidth: '500px'}} onSubmit={handleInputChange}>
                        <h2 className="text-center mb-4 register-title">Create Account</h2>
                        {/** Error Messages */}
                        {error && (
                            <div className="alert alert-danger py-2 mb-3 text-center small" role="alert">
                                {error}
                            </div>
                        )}
                        {/* name & surname */}
                        <div className="row g-3 mb-3 input-container"> 
                            <div className="col-12 col-sm-6">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" className="form-control inp-bg" id="firstName" required placeholder="Enter name" value={user.name} onChange={e => setUser({...user, name: e.target.value.toLowerCase()})}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="lastName" className="form-label">Surname</label>
                                <input type="text" className="form-control inp-bg" id="lastName" required placeholder="Enter surname" value={user.surname} onChange={e => setUser({...user, surname: e.target.value.toLowerCase()})}/>
                            </div>
                        </div>
                        {/* city & ZIP */}
                        <div className="row g-3 mb-3 input-container">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="zipCode" className="form-label">ZIP</label>
                                <input type="text" className="form-control inp-bg" id="zipCode" required placeholder="ZIP Code" value={user.zipCode} onChange={e => setUser({...user, zipCode: e.target.value.toLowerCase()})}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control inp-bg" id="city" required placeholder="City" value={user.city} onChange={e => setUser({...user, city: e.target.value.toLowerCase()})}/>
                            </div>
                        </div>
                        {/* state */}
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control inp-bg" id="state" required placeholder="Enter State" value={user.state} onChange={e => setUser({...user, state: e.target.value.toLowerCase()})}/>
                        </div>
                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control inp-bg" id="email" required placeholder="Enter email" value={user.email} onChange={e => setUser({...user, email: e.target.value.toLowerCase()})}/>
                        </div>
                        {/* password */}
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