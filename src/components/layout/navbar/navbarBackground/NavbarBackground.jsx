import './navbarBackground.css'
export default function NavbarBackground({img}) {
  return (
    <>
      <div className='navBack-bg'>
          <img src={img} className='navBack-img w-100' alt="" />
      </div>
    </>
  )
}

