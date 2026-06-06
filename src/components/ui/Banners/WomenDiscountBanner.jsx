import WomanBrands from '../../../assets/img/Banners/wonan-brands.jpg'
import './DiscountBanner.css'
import DiscountBennerHelper from './DiscountBannerHelper'

export default function WomenDiscountBanner() {
  return (
    <>
      <DiscountBennerHelper imagePosition='left' title={'Modern & Tech-Forward'} percent={60} text_description={'Visit our shop to see amazing creations from our designers.'} imageUrl={WomanBrands} img_alt_text={'WomanBrands'} linkto={''}/>
    </>
  )
}