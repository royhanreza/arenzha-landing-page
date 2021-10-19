import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"

const Product = () => {
  const products = [
    {
      name: "Purchasing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
      imageUrl: "../images/002-cart.png",
    },
    {
      name: "Manufaktur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
      imageUrl: "../images/006-delivery-truck.png",
    },
    {
      name: "Sales",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
      imageUrl: "../images/003-sale.png",
    },
    {
      name: "Supply Chain Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
      imageUrl: "../images/001-deal.png",
    },
    {
      name: "HR Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
      imageUrl: "../images/005-list.png",
    },
    {
      name: "Finance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
      imageUrl: "../images/004-payment.png",
    },
  ]

  const itemClass =
    "bg-white p-8 mobile-s:p-5 rounded shadow mobile-s:text-center"

  return (
    <section
      className="pt-5 mobile-s:pt-3 pb-48 mobile-s:pb-12 bg-blue-600"
      style={{
        backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
      }}
      id="product"
    >
      <Wrapper>
        <h1 className="text-3xl mobile-s:text-lg font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2">
          Layanan Kami
        </h1>
        <p className="text-center text-gray-600 mobile-s:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="mt-10 mobile-s:mt-5 grid grid-cols-3 mobile-s:grid-cols-1 gap-4 mobile-s:gap-3">
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
            <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p>
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
            <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p>
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
            <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p>
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
            <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p>
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
            <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p>
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
            <p className="mt-3 font-thin text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Product
