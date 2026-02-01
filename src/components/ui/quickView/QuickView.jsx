import { products } from '../carouselCards/CarouselCards';
import './QuickView.css';
import { Link } from 'react-router-dom';



export default function QuickView() {
  const items = products.slice(8, 16)
  return (
    <>
      <div className="trending-Items-bg my-4">
        <section className="container-fluid trending-Items">
          <div className="card border-0 bg-black bg-gradient py-3 mb-3 text-center text-light shadow" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title text-uppercase fw-bold fs-3">
                <i className="bi bi-book-fill text-warning"></i> Our <span>Trending</span> <i className="bi bi-book-fill text-warning"></i>
              </h5>
            </div>
          </div>
        </section>
        <div className="trending-Items-bg">
          <section className="w-100 d-flex flex-wrap justify-content-center align-items-center gap-2">
            {items.map((product) => (
              <div key={product.id} className="card item-card position-relative shadow border-0 m-xl-3" style={{ width: "18rem" }}>
                <img src={product.main} alt={product.title} className="card-img-top" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-uppercase">{product.title}</h5>
                  </div>
                  <p className="card-text">{product.description}</p>
                </div>{/* //TODO: write add to cart logic */}
                <button className='cart-btn-out text-dark'>Cart</button>
                <Link 
                  to={`/item/${product.slug}`} 
                  className='view-btn-out text-decoration-none text-dark text-center pt-1'
                >
                  view
                </Link>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}