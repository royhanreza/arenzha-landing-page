import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"
import { Phone, Mail } from "react-feather"

const Footer = () => {
  return (
    <section
      className="pt-16 mobile-s:pt-6 bg-gray-800"
      style={
        {
          // backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
        }
      }
    >
      <Wrapper>
        <div className="flex mobile-s:flex-col pb-6 border-b border-gray-700">
          <div className="w-1/3 mobile-s:w-full mobile-s:text-center">
            <div>
              <StaticImage
                src="../images/arenzha-logo.jpg"
                width={96}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Arenzha Media Teknologi - Your IT Solution"
              />
            </div>
            <strong className="block mt-3 text-gray-200 mobile-s:text-sm">
              Arenzha Media Teknologi
            </strong>
            <p className="mt-2 text-sm text-gray-400 mobile-s:text-xs">
              I No. 2, Margahayu Raya, Jl. Saturnus Ujung, Manjahlega,
              Rancasari, Bandung City, West Java 40286
            </p>
          </div>
        </div>
        <div className="py-5 mobile-s:py-3 flex mobile-s:flex-col justify-center">
          <div className="flex items-center text-gray-400 mobile-s:self-center">
            <Phone className="mr-2" size={16} />
            <span className="text-sm mobile-s:text-xs">+628963058855</span>
          </div>
          <div className="flex items-center text-gray-400 ml-4 mobile-s:ml-0 mobile-s:self-center">
            <Mail className="mr-2" size={16} />
            <span className="text-sm  mobile-s:text-xs">
              rezha.arenzha@gmail.com
            </span>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Footer
