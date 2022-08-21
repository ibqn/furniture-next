import clsx from 'clsx'
import { hero } from 'data'
import Stats from 'components/stats'

const Hero = () => {
  const { title, subtitle, buttonText } = hero
  return (
    <section
      className={clsx(
        'h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat',
        'text-white pt-[225px] pb-[254px] relative mb-12',
        'lg:bg-center lg:mb-28'
      )}
    >
      <div className="container mx-auto text-center">
        <h1
          className={clsx(
            'text-2xl mx-auto font-semibold mb-[30px]',
            'lg:text-[64px] lg:leading-tight lg:max-w-[888px]'
          )}
        >
          {title}
        </h1>

        <h2 className="mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl">
          {subtitle}
        </h2>

        <button
          className={clsx(
            'bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)]',
            'px-[35px] py-[9px] mb-[160px] font-semibold text-sm rounded-md backdrop-blur-md transition',
            'lg:px-[80px] lg:py-[16px] lg:mb-[194px] lg:text-xl'
          )}
        >
          {buttonText}
        </button>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  )
}

export default Hero
