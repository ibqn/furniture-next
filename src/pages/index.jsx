import Features from 'components/features'
import Hero from 'components/hero'
import NewInStore from 'components/new-in-store'

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Hero />
      <Features />
      <NewInStore />
    </div>
  )
}
