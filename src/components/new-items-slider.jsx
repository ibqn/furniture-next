import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { newInStore } from 'data'
// import Image from 'next/future/image'
import Image from 'next/image'
import clsx from 'clsx'

const NewItemsSlider = () => {
  const { products } = newInStore
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {products.map(({ image, name }, index) => (
        <SwiperSlide className="max-w-[265px]" key={index}>
          <div className="relative">
            <Image src={image} alt={name} className="max-w-full h-auto" />
            <div
              className={clsx(
                'absolute text-white',
                'bottom-[20px] w-full text-center text-[18px] lg:text-2xl',
                'font-semibold capitalize'
              )}
            >
              {name}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default NewItemsSlider
