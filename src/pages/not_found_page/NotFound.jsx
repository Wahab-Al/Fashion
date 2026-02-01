
import { Link } from 'react-router-dom';
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground';
import errorBack from '../../assets/img/errorBack.jpg'
import './notFound.css'

const NotFound = () => {
  return (
    <>
      <NavbarBackground img={errorBack} />
      <div className="container error-container vh-100 d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="display-1 fw-bold text-orange" style={{ fontSize: '120px' }}>404</h1>
          <h2 className="fw-bold mb-3">Oops! Page Not Found</h2>
          <p className="text-muted mb-4">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-lg text-white rounded-pill px-5 py-3 shadow-sm" style={{ backgroundColor: '#ff7b00' }}>
            Back to Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;