import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper'

import { testimonial } from 'data'

import styles from './testimonial-slider.module.css'
import Image from 'next/image'
import clsx from 'clsx'

const TestimonialSlider = () => {
  const { people } = testimonial
  return (
    <Swiper
      className={clsx(styles.testimonialSlider)}
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={true}
    >
      {people.map((person, index) => {
        const { name, avatar, message, position } = person

        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[250px]">
              <div className="flex items-center gap-x-5 mb-9">
                <Image src={avatar} alt={`Person ${name}`} />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{position}</div>
                </div>
              </div>
              <div className="xl:text-xl max-w-[570px]">{message}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
