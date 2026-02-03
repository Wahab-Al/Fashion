import { products } from '../carouselCards/CarouselCards'
import './QuickView.css';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function QuickView() {
  const items = products.slice(8, 16)

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.id === product.id)
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.title} has been added to your shopping bag.`,
      icon: 'success',
      timer: 2000, 
      titleColor: 'rgb(255, 123, 0)',
      showConfirmButton: false,
      toast: true, 
      position: 'top-end',
      timerProgressBar: true,
      background: '#1a1a1a', 
      color: '#fff',
      didOpen: (toast) => {
        toast.querySelector('.swal2-timer-progress-bar').style.backgroundColor = 'rgba(82, 150, 116, 1)'
      }
    })

    window.dispatchEvent(new Event('cartUpdated'))
  }

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
                  <p className="card-text text-truncate">{product.description}</p>
                </div>  
                <button 
                  className='cart-btn-out text-dark' 
                  onClick={() => addToCart(product)}
                >
                  Cart
                </button>
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