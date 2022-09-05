import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper'

import { products } from 'data'

import { HiPlus } from 'react-icons/hi'

import styles from './product-slider.module.css'

import clsx from 'clsx'
import Image from 'next/image'

const ProductSlider = () => {
  const { pages } = products

  return (
    <Swiper
      className={clsx(styles.productSlider, 'min-h-[1300px]')}
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {pages.map((page, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
            {page.productList.map((product, index) => {
              const { name, price, oldPrice, image } = product
              return (
                <div
                  key={index}
                  className="w-full max-w-[290px] h-[380px] text-left"
                >
                  <div
                    className={clsx(
                      'border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px]',
                      'flex justify-center items-center mb-[15px] relative transition'
                    )}
                  >
                    <Image src={image} alt={name} />
                    <div
                      className={clsx(
                        'absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full',
                        'flex justify-center items-center cursor-pointer',
                        'hover:bg-gray-300 transition'
                      )}
                    >
                      <HiPlus className="text-primary text-xl" />
                    </div>
                  </div>
                  <div className="font-semibold lg:text-xl">{name}</div>
                  <div className="flex items-center gap-x-3">
                    <div>$ {price}</div>
                    <div className="text-[15px] text-grey line-through">
                      $ {oldPrice}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductSlider
