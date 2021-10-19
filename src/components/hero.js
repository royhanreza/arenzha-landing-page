import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"

const Hero = () => (
  <section
    className="py-5"
    style={
      {
        //   background: `linear-gradient(0deg, rgb(215, 240, 250) -20%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)`,
      }
    }
    id="home"
  >
    <Wrapper>
      <div className="flex mobile-s:flex-col items-center py-24 mobile-s:py-3">
        <div className="w-1/2 mobile-s:w-full pr-10 mobile-s:pr-0">
          <h1 className="text-5xl mobile-s:text-2xl font-bold leading-tight tracking-wide mobile-s:text-center">
            <span className="text-blue-600">Arenzha</span> Media Teknologi
          </h1>
          <p className="mt-5 mobile-s:mt-3 text-gray-600 mobile-s:text-sm mobile-s:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mobile-s:text-center">
            <Link
              to="#"
              className="px-4 mobile-s:px-3 py-3 mobile-s:py-2 bg-blue-600 text-white inline-block mobile-s:text-center mt-8 mobile-s:mt-5 rounded-sm mobile-s:text-sm"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
        <div className="w-1/2 mobile-s:w-full text-right mobile-s:text-center">
          <StaticImage
            src="../images/hero-illustration.jpg"
            width={500}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Arenzha Media Teknologi - Your IT Solution"
          />
        </div>
      </div>
    </Wrapper>
  </section>
)

export default Hero
