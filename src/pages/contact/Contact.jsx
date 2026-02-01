
import navBack from '../../assets/img/hat.jpg'
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import './Contact.css'
export default function Contact() {
  return (
    <>
      <NavbarBackground img={navBack}/>
      <div className="contact-main">
        <h2 className='text-center my-4'>You Find Our <span>Location</span></h2>
        <div className="container d-md-flex justify-content-between py-5">
          <div className="address-div my-auto px-3">
            <div className="get-in-touch">
              <h4>Get In <span>Touch</span></h4>
              <p><span>Call Us:</span> +(49)00000000</p>
              <p><span>E-mail:</span> info@fashion.gmx</p> 
              <p>29303 Bergen Kreis Celle, Deutschland</p>    
            </div> 
            <div className="working-hours">
              <h4>Working <span>Hours</span></h4>
              <h5>Business Service:</h5>
                <p>
                  Monday to Friday 8.00 am - 6.00 pm
                  Saturday and Sunday - Closed
                </p>
              <h5>Customer support:</h5>
                <p>
                  Monday to Friday 8.00 am - 6.00 pm
                  Saturday 10.00 am - 4.00 pm
                  Sunday - Closed  
                </p>
            </div>       
          </div>
          <div className="address-map px-3">
            <iframe className='rounded rounded-4 map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2422.0199741094234!2d10.08083254786991!3d52.623483159367154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1763702834459!5m2!1sde!2sde" style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <section className="contact-section">
          <div className="contact-container">
            <h2 className="form-title">FILL OUT THE FORM</h2>
            <form className="contact-form-grid">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea placeholder="Message" className="form-textarea"></textarea>
              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}