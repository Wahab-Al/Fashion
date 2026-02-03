import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

export default function Logout() {
    const navigate = useNavigate()

    useEffect(()=> {
        //localStorage.removeItem('token') handling soon 
        localStorage.removeItem('currentUser')
        window.dispatchEvent(new Event('userLoggedOut'))

        const timer = setTimeout(() => {
            navigate('/login');
        }, 1500)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
                <div className="text-center">
                    <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <h2 className="fw-bold">Logging out...</h2>
                    <p className="text-secondary">Cleaning up your session, please wait.</p>
                </div>
            </div>
        </>
    )
}
