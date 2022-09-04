import { features } from 'data'
import Image from 'next/image'

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 order-2">
            <Image
              alt=""
              src={image}
              layout="responsive"
              width="100%"
              height="100%"
              quality={100}
            />
          </div>
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="title lg:mt-[40px] lg:mb-[35px]">{title}</h2>
            <p className="subtitle sm:mb-[50px]">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSecond
