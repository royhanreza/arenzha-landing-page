import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"

const Product = () => {
  
  const itemClass ="bg-white p-8 mobile-s:p-5 lg:p-8 rounded shadow mobile-s:text-center lg:text-left"

  return (
    <section
      className="pt-5 mobile-s:pt-3 lg:pt-5 pb-28 mobile-s:pb-12 md:pb-28 lg:pb-28 bg-blue-600"
      style={{
        backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
      }}
      id="product"
    >
      <Wrapper>
        <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4">
          Produk & Solusi
        </h1>
        <p className="text-center text-gray-600 mobile-s:text-sm lg:text-base lg:max-w-xl lg:mx-auto lg:text-center">
          Software Development
        </p>
        <p className="text-justify text-gray-600 mobile-s:text-sm lg:text-base lg:max-w-xl lg:mx-auto lg:text-center">
          Dengan pengalaman dan tim kami miliki, kami siap membantu untuk menawarkan solusi total dalam pengembangan sistem aplikasi sesuai dengan
          kebutuhan unit bisnis Anda sehingga dapat membantu Anda dalam membuat keputusan secara efektif, efisien dan aman dalam setiap proses bisnis.
        </p>
        <div className="mt-10 mobile-s:mt-5 grid grid-cols-3 mobile-s:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mobile-s:gap-3">
          <div className={itemClass}>
            <div>
              <StaticImage
                src="../images/002-cart.png"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3">Purchasing</h3>
            {/* <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p> */}
          </div>
          <div className={itemClass}>
            <div>
              <StaticImage
                src="../images/006-delivery-truck.png"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3">Manufaktur</h3>
            {/* <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p> */}
          </div>
          <div className={itemClass}>
            <div>
              <StaticImage
                src="../images/003-sale.png"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3">Sales</h3>
            {/* <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p> */}
          </div>
          <div className={itemClass}>
            <div>
              <StaticImage
                src="../images/001-deal.png"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3">Supply Chain Management</h3>
            {/* <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p> */}
          </div>
          <div className={itemClass}>
            <div>
              <StaticImage
                src="../images/005-list.png"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3">HR Management</h3>
            {/* <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p> */}
          </div>
          <div className={itemClass}>
            <div>
              <StaticImage
                src="../images/004-payment.png"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3">Finance</h3>
            {/* <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p> */}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Product
