import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"

const Technology = () => {
  return (
    <section
      className="py-24 mobile-s:py-5 lg:py-24"
      style={
        {
          // backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
        }
      }
      id="technology"
    >
      <Wrapper>
        <div className="flex mobile-s:flex-col md:flex-row items-center">
          <div className="w-1/3 mobile-s:w-full lg:w-1/3">
            <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4 lg:text-left">
              Teknologi
            </h1>
            <p className="text-center text-gray-600 mobile-s:text-sm md:text-base lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="w-2/3 mobile-s:w-full lg:w-2/3 pl-20 mobile-s:pl-0 lg:pl-20 pt-12 mobile-s:pt-6 lg:pt-12">
            <div className="flex mobile-s:flex-col md:flex-row mobile-s:justify-center lg:justify-start w-full items-center">
              <div>
                <StaticImage
                  src="../images/react-logo.png"
                  //   width={130}
                  height={70}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div>
                <StaticImage
                  src="../images/laravel-logo.png"
                  //   width={130}
                  height={70}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div>
                <StaticImage
                  src="../images/vue-logo.png"
                  //   width={130}
                  height={70}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div>
                <StaticImage
                  src="../images/graphql-logo.png"
                  //   width={130}
                  height={70}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
            </div>
            <div className="flex mobile-s:flex-col lg:flex-row mobile-s:justify-center w-full items-center">
              <div>
                <StaticImage
                  src="../images/nextjs-logo.png"
                  //   width={130}
                  height={50}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div>
                <StaticImage
                  src="../images/gatsby-logo.png"
                  //   width={130}
                  height={50}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div>
                <StaticImage
                  src="../images/flutter-logo.png"
                  //   width={130}
                  height={50}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  // style={{ marginBottom: `1.45rem` }}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Technology
