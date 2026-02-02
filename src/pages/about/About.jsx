import navBack from '../../assets/img/team.jpg'
import NavbarBackground from '../../components/layout/navbar/navbarBackground/NavbarBackground'
import Manager from '../../assets/img/Team/Manager.jpg'
import Designer from '../../assets/img/Team/Designer3.jpg'
import Marketing from '../../assets/img/Team/Marketing.jpg'
import './About.css'

export default function About() {
  const team = [
        {
        name: "Wahab",
        role: "Founder & CEO & developer",
        img: Manager
        },
        {
        name: "Hiba",
        role: "Designer",
        img: Designer
        },
        {
        name: "Rama Lois",
        role: "Marketing",
        img: Marketing
        }
    ];
  return (
    <>
      <NavbarBackground img={navBack} />
      
      <div className="services-container py-5">
        
        {/** Start Team section */}
        <section className="team-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                <h2 className="fw-bold">MEET THE <span style={{ color: '#ff7b00' }}>TEAM</span></h2>
                </div>
                <div className="row g-4 justify-content-center">
                {team.map((member, index) => (
                    <div key={index} className="col-md-4">
                    <div className="team-card">
                        <div className="team-img-wrapper">
                        <img src={member.img} alt={member.name} className="img-fluid" />
                        
                        {/*   name & position    */}
                        <div className="team-info-box shadow-sm">
                            <h5 className="fw-bold mb-1">{member.name}</h5>
                            <p className="text-muted small mb-3">{member.role}</p>
                            
                            {/* social media */}
                            <div className="team-socials">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        {/** End Team section */}
        {/** Start Capabilities section */}
        <section className="features-section py-5 position-relative overflow-hidden">
          {/* Background Overlay Layer */}
          <div className="features-bg-overlay"></div>
          <div className="container position-relative z-2 py-5">
            <div className="row g-5">
              {/* Start: Column 1 */}
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12 feature-item d-flex align-items-start">
                    <div className="feature-icon me-3 mt-1">
                      <i className="bi bi-box-seam text-orange fs-3"></i>
                    </div>
                    <div>
                      <h4 className="text-white fw-bold h5">Smart Fleet Management</h4>
                      <p className="text-light opacity-75 small">
                        Optimize your operations with real-time tracking and automated reporting systems designed for modern logistics.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 feature-item d-flex align-items-start mt-5">
                    <div className="feature-icon me-3 mt-1">
                      <i className="bi bi-hourglass-split text-orange fs-3"></i>
                    </div>
                    <div>
                      <h4 className="text-white fw-bold h5">Real-time Analytics</h4>
                      <p className="text-light opacity-75 small">
                        Gain instant insights into driver behavior and fuel consumption to reduce costs and increase overall efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 feature-item d-flex align-items-start mt-5">
                    <div className="feature-icon me-3 mt-1">
                      <i className="bi bi-graph-up-arrow text-orange fs-3"></i>
                    </div>
                    <div>
                      <h4 className="text-white fw-bold h5">Custom Reporting Tools</h4>
                      <p className="text-light opacity-75 small">
                        Generate uniquely designed data visualizations that help you make informed decisions for your business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End: Column 1 */}
              {/* Start: Column 2 */}
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12 feature-item d-flex align-items-start">
                    <div className="feature-icon me-3 mt-1">
                      <i className="bi bi-phone text-orange fs-3"></i>
                    </div>
                    <div>
                      <h4 className="text-white fw-bold h5">Mobile First Integration</h4>
                      <p className="text-light opacity-75 small">
                        Access your entire dashboard from any mobile device with our seamless application synchronization features.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 feature-item d-flex align-items-start mt-5">
                    <div className="feature-icon me-3 mt-1">
                      <i className="bi bi-shield-check text-orange fs-3"></i>
                    </div>
                    <div>
                      <h4 className="text-white fw-bold h5">Advanced Safety Sensors</h4>
                      <p className="text-light opacity-75 small">
                        Utilize vast collections of sensor data to ensure the highest safety standards for your drivers and cargo.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 feature-item d-flex align-items-start mt-5">
                    <div className="feature-icon me-3 mt-1">
                      <i className="bi bi-gear text-orange fs-3"></i>
                    </div>
                    <div>
                      <h4 className="text-white fw-bold h5">High Quality Hardware</h4>
                      <p className="text-light opacity-75 small">
                        Experience unmatched durability with industrial-grade telematics hardware built to perform in the harshest conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End: Column 2 */}
            </div>
          </div>
        </section>
        {/** End Capabilities section */}
        {/** Start services section */}
        <div className="container">
          <div className="services-header text-center mb-5">
            <h2 className="main-title fw-bold">WHAT WE <span className="highlight" style={{ color: '#ff7b00' }}>OFFERING</span></h2>
          </div>
          <div className="row g-4 justify-content-center">
            {/* 1. Call Us Anytime */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                  <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                    <div style={{ width: '50px', height: '50px', color: '#ff7b00' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fw-bold m-0">Call Us Anytime</h5>
                      <p className="card-text text-muted small mt-2">support team is available 24/7 to answer your whenever you need it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2. Free Shipping */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                  <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                    <div style={{ width: '50px', height: '50px', color: '#ff7b00' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fw-bold m-0">Free Shipping</h5>
                      <p className="card-text text-muted small mt-2">We provide fast and reliable delivery directly to your location at no extra cost.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3. Free Returns */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                  <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                    <div style={{ width: '50px', height: '50px', color: '#ff7b00' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fw-bold m-0">Free Returns</h5>
                      <p className="card-text text-muted small mt-2">30 days for a full, hassle-free refund, Your satisfaction is our priority.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4. Secured Payments */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                  <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                    <div style={{ width: '50px', height: '50px', color: '#ff7b00' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                        <line x1="2" y1="10" x2="22" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fw-bold m-0">Secured Payments</h5>
                      <p className="card-text text-muted small mt-2">We use industry-leading encryption and secure gateways to ensure that all your transactions are fully protected.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** End services section */}
      </div>
    </>
  );
}
