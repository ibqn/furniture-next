import { testimonial } from 'data'
import Image from 'next/image'
import TestimonialSlider from 'components/testimonial-slider'

const Testimonial = () => {
  const { image, title } = testimonial
  return (
    <div className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[40%] xl:max-w-[50%]">
            <h2 className="title mb-9">{title}</h2>
            <TestimonialSlider />
          </div>
          <div className="order-1 ">
            <Image src={image} alt="Living room" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
