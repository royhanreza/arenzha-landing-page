import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"

const Hero = () => (
  <section
    className="py-4"
    style={
      {
        //   background: `linear-gradient(0deg, rgb(215, 240, 250) -20%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)`,
      }
    }
    id="home"
  >
    <Wrapper>
      <div className="flex mobile-s:flex-col lg:flex-row items-center py-17 mobile-s:py-3 lg:py-24">
        <div className="w-1/2 mobile-s:w-full lg:w-1/2 pr-10 mobile-s:pr-0 lg:pr-10">
          <h1 className="text-5xl mobile-s:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight lg:leading-snug tracking-wide mobile-s:text-center lg:text-left">
            <span className="text-blue-600">Arenzha</span><h1>Media Teknologi</h1>
          </h1>
          <p className="mt-5 mobile-s:mt-3 lg:mt-5 text-gray-600 mobile-s:text-sm md:text-base mobile-s:text-center lg:text-left">
            Kami adalah Software House yang bergerak di bidang pembuatan perangkat lunak dan konsultan IT, yang berlokasi di kota Bandung, Jawa Barat.
          </p>
          <p className="mt-5 mobile-s:mt-3 lg:mt-5 text-gray-600 mobile-s:text-sm md:text-base mobile-s:text-center lg:text-left">
          Komitmen kami memberikan solusi lengkap untuk bisnis anda dalam lingkup konsultan, desain, penyedia aplikasi dan pemeliharaan dalam sistem teknologi informasi.
          </p>
          <p className="mt-5 mobile-s:mt-3 lg:mt-5 text-gray-600 mobile-s:text-sm md:text-base mobile-s:text-center lg:text-left">
          Mengutamakan konsistensi dalam kualitas layanan sebagai bentuk hubungan jangka panjang yang berkelajutan bersama setiap klien kami.
          </p>
          <div className="mobile-s:text-center lg:text-left">
            <Link
              to="#contact"
              className="px-4 mobile-s:px-3 py-3 mobile-s:py-2 bg-blue-600 text-white inline-block mobile-s:text-center mt-8 mobile-s:mt-5 rounded-sm mobile-s:text-sm"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
        <div className="w-1/2 mobile-s:w-full lg:w-1/2 text-right mobile-s:text-center lg:text-right">
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
