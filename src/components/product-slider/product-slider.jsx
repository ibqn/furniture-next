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
      className={clsx(styles.productSlider, 'moo')}
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {pages.map((page, index) => (
        <SwiperSlide key={index}>
          <div>
            {page.productList.map((product, index) => {
              const { name, price, oldPrice, image } = product
              return (
                <div key={index}>
                  <div>
                    <Image src={image} alt={name} />
                    <div>
                      <HiPlus className="text-primary text-xl" />
                    </div>
                  </div>
                  <div>{name}</div>
                  <div>
                    <div>$ {price}</div>
                    <div>$ {oldPrice}</div>
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
