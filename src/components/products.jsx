import { products } from 'data'
import ProductSlider from 'components/product-slider'

const Products = () => {
  const { title, subtitle } = products

  return (
    <section className="section text-center">
      <div className="container mx-auto">
        <div>
          <h2 className="title">{title}</h2>
          <p className="mx-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </p>
        </div>
        <ProductSlider />
      </div>
    </section>
  )
}

export default Products
