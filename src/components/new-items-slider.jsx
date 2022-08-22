import { Swiper, SwiperSlide } from 'swiper/react'

import { newInStore } from 'data'
// import Image from 'next/future/image'
import Image from 'next/image'

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
            <div>{name}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default NewItemsSlider
