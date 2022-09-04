import { features } from 'data'
import Image from 'next/image'

const Features = () => {
  const { title, subtitle, image, items } = features
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 order-1 lg:-order-1">
            <Image
              alt=""
              src={image}
              layout="responsive"
              width="100%"
              height="100%"
              quality={100}
            />
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title lg:mb-[35px]">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <div className="sm:mb-[50px]">
              {items.map(({ title, subtitle, icon }, index) => (
                <div className="flex mb-6 lg:last:mb-0" key={index}>
                  <div className="text-2xl mr-4 lg:text-3xl">{icon}</div>
                  <div>
                    <h4 className="text-base lg:text-xl font-semibold mb-3">
                      {title}
                    </h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
