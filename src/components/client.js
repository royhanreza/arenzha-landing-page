import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"

const Client = () => {
  const itemClassName = "p-8 mobile-s:p-2"

  return (
    <section
      className="pt-24 mobile-s:pt-12 md:pt-20 lg:pt-24 pb-48 mobile-s:pb-12 md:pb-28 lg:pb-48"
      style={{
        backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
      }}
    >
      <Wrapper>
        <h1 className="text-3xl mobile-s:text-lg md:text-2xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2">
          Klien Kami
        </h1>
        <p className="text-center text-gray-600 mobile-s:text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="mt-10 grid grid-cols-2 mobile-s:grid-cols-1 md:grid-cols-2 lg:gap-3">
          <div className={itemClassName}>
            <div className="text-center">
              <StaticImage
                src="../images/vue-logo.png"
                height={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3 text-center">
              PT. Magenta Mediatama
            </h3>
            <div className="flex items-start mt-3">
              <div className="w-1/4 sm:w-1/6">
                <div className="rounded-full bg-gray-500 overflow-hidden w-14 h-14 shadow-xl">
                  <StaticImage
                    src="../images/clients/magenta-person.jpeg"
                    // width={48}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="product"
                    className="object-cover object-center max-w-full"
                  />
                </div>
              </div>
              <div className="pl-5">
                <p className="font-thin text-sm text-gray-500">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt."
                </p>
                <strong className="text-sm">
                  Yo Tinco&nbsp;-&nbsp;
                  <span className="text-yellow-500">CEO</span>
                </strong>
              </div>
            </div>
          </div>
          <div className={itemClassName}>
            <div className="text-center">
              <StaticImage
                src="../images/gatsby-logo.png"
                height={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3 text-center">Gatsby Corporation</h3>
            <div className="flex items-start mt-3">
              <div className="w-1/4 sm:w-1/6">
                <div className="rounded-full bg-gray-500 overflow-hidden w-14 h-14 shadow-xl">
                  <StaticImage
                    src="../images/clients/magenta-person.jpeg"
                    // width={48}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="product"
                    className="object-cover object-center max-w-full"
                  />
                </div>
              </div>
              <div className="pl-5">
                <p className="font-thin text-sm text-gray-500">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt."
                </p>
                <strong className="text-sm">
                  Yo Tinco&nbsp;-&nbsp;
                  <span className="text-yellow-500">CEO</span>
                </strong>
              </div>
            </div>
          </div>
          <div className={itemClassName}>
            <div className="text-center">
              <StaticImage
                src="../images/nextjs-logo.png"
                height={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3 text-center">
              Next JS International
            </h3>
            <div className="flex items-start mt-3">
              <div className="w-1/4 sm:w-1/6">
                <div className="rounded-full bg-gray-500 overflow-hidden w-14 h-14 shadow-xl">
                  <StaticImage
                    src="../images/clients/magenta-person.jpeg"
                    // width={48}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="product"
                    className="object-cover object-center max-w-full"
                  />
                </div>
              </div>
              <div className="pl-5">
                <p className="font-thin text-sm text-gray-500">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt."
                </p>
                <strong className="text-sm">
                  Yo Tinco&nbsp;-&nbsp;
                  <span className="text-yellow-500">CEO</span>
                </strong>
              </div>
            </div>
          </div>
          <div className={itemClassName}>
            <div className="text-center">
              <StaticImage
                src="../images/graphql-logo.png"
                height={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="product"
              />
            </div>
            <h3 className="font-bold mt-3 text-center">CV Graphql</h3>
            <div className="flex items-start mt-3">
              <div className="w-1/4 sm:w-1/6">
                <div className="rounded-full bg-gray-500 overflow-hidden w-14 h-14 shadow-xl">
                  <StaticImage
                    src="../images/clients/magenta-person.jpeg"
                    // width={48}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="product"
                    className="object-cover object-center max-w-full"
                  />
                </div>
              </div>
              <div className="pl-5">
                <p className="font-thin text-sm text-gray-500">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt."
                </p>
                <strong className="text-sm">
                  Yo Tinco&nbsp;-&nbsp;
                  <span className="text-yellow-500">CEO</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Client
