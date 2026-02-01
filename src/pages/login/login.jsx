import backImg from '../../assets/img/About.jpg'
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground';
import './login.css'; 

export default function Login() {
    return (
        <>
            <NavbarBackground img={backImg}/>
            <main className='main-login-page'>
                <div className="container py-3 login__form-container">
                    <form className="border border-1 m-auto p-4 rounded-4 login-form-box shadow-lg">
                        <h2 className="text-center mb-4 login-title">Welcome Back</h2>             
                        <div className="mb-3 login-input-group">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control login-inp" 
                                id="email" 
                                placeholder="Enter email" 
                            />
                        </div>
                        <div className="mb-3 login-input-group">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control login-inp" 
                                id="pass" 
                                placeholder="Enter password" 
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