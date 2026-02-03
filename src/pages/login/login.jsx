import { useState } from 'react';
import backImg from '../../assets/img/About.jpg'
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground';
import './login.css'; 
import { useNavigate } from 'react-router';

export default function Login() {
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem('users'))
    const [user, setUser] = useState({
        email:'', password:''
    })

    const handleInputChangeToLogin = (e) =>{
        e.preventDefault()
        // check user and password
        if(!user.email.trim() || !user.password.trim()){
            console.log('email or password is invalid');
            return
        }

        // check if is any user exist: 
        if (users.length === 0) {
            console.log("No users found, please register first");
            return;
        }
        // find user:
        const isUserExist = users.find(u => u.email.toLowerCase() === user.email.toLowerCase() && 
            u.password === user.password)
        if(!isUserExist){
            console.log("Invalid email or password");
            return;
        }
        localStorage.setItem('currentUser', JSON.stringify(isUserExist))
        window.dispatchEvent(new Event('userLoggedIn'))
        console.log("Login successful:", isUserExist);
        // rest inputs
        setUser({ email: "", password: "" })
        navigate('/')
    } 

    return (
        <>
            <NavbarBackground img={backImg}/>
            <main className='main-login-page'>
                <div className="container py-3 login__form-container">
                    <form className="border border-1 m-auto p-4 rounded-4 login-form-box shadow-lg" onSubmit={handleInputChangeToLogin}>
                        <h2 className="text-center mb-4 login-title">Welcome Back</h2>             
                        <div className="mb-3 login-input-group">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control login-inp" 
                                id="email" 
                                placeholder="Enter email" 
                                value={user.email}
                                onChange={e => setUser({...user , email: e.target.value})}
                            />
                        </div>
                        <div className="mb-3 login-input-group">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control login-inp" 
                                id="pass" 
                                placeholder="Enter password" 
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
                            No account yet? <a href="/register" className="login-link text-decoration-none">Sign Up</a>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}