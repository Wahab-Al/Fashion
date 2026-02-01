import './Promo.css'

export default function Promo() {
  return (
    <>
      <div className="promo-videos p-4 m-2">
        <div className="row g-0 overflow-hidden rounded"> 
          <div className="col-md-8 col-12"> 
            <div className="ratio ratio-21x9 h-100">
              <video autoPlay muted loop playsInline className="object-fit-cover">
                <source src="/promos/Passa.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-md-4 col-12"> 
            <div className="ratio ratio-21x9 h-100">
              <video autoPlay muted loop playsInline preload="auto" className="object-fit-cover">
                <source src="/promos/Simo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <h2 className='promo-title'>Style Without Limits</h2>
      </div>
    </>
  )
}

