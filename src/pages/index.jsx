import Features from 'components/features'
import FeaturesSecond from 'components/features-second'
import Hero from 'components/hero'
import NewInStore from 'components/new-in-store'
import Newsletter from 'components/newsletter'
import Products from 'components/products'
import Testimonial from 'components/testimonial'

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Hero />
      <Features />
      <NewInStore />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
    </div>
  )
}
