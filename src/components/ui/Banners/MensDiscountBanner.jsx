import SuitImg from '../../../assets/img/banners/suit.jpg'
import './DiscountBanner.css'
import DiscountBennerHelper from './DiscountBannerHelper'

export default function MensDiscountBanner() {
  return (
    <>
      <DiscountBennerHelper imagePosition={'right'} title={'Bold & Action-Oriented'} percent={30} text_description={'Visit our shop to see amazing creations from our designers.'} imageUrl={SuitImg} img_alt_text={'Suit'} linkto={''}/>
    </>
  )
}

