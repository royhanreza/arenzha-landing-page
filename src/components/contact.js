import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"

const Contact = () => {
  return (
    <section
      className="py-24 mobile-s:py-6 lg:py-24"
      style={
        {
          // backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
        }
      }
      id="contact"
    >
      <Wrapper>
        <div className="flex mobile-s:flex-col lg:flex-row items-center md:justify-center lg:justify-start">
          <div className="w-1/2 mobile-s:w-full md:w-1/2 pr-20 mobile-s:pr-0 lg:pr-20">
            <h1 className="text-3xl mobile-s:text-lg lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4">
              Hubungi Kami
            </h1>
            <form
              name="contact"
              method="POST"
              className="mobile-s:text-sm mobile-s:px-3 md:px-0 md:text-base"
              data-netlify="true"
            >
              <div className="">
                <label className="text-gray-500 block mb-2" htmlFor="name">
                  Nama
                </label>
                <input
                  type="text"
                  className="bg-gray-50 rounded p-2 w-full"
                  placeholder="Masukkan nama"
                  name="name"
                  id="name"
                />
              </div>
              <div className=" mt-4">
                <label className="text-gray-500 block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-gray-50 rounded p-2 w-full"
                  placeholder="Masukkan email"
                  name="email"
                  id="email"
                />
              </div>
              <div className=" mt-4">
                <label className="text-gray-500 block mb-2" htmlFor="subject">
                  Subjek
                </label>
                <input
                  type="text"
                  className="bg-gray-50 rounded p-2 w-full"
                  placeholder="Masukkan subjek"
                  name="subject"
                  id="subject"
                />
              </div>
              <div className=" mt-4">
                <label className="text-gray-500 block mb-2" htmlFor="message">
                  Pesan
                </label>
                <textarea
                  type="text"
                  className="bg-gray-50 rounded p-2 w-full"
                  placeholder="Masukkan pesan"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <div className=" mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white block w-full rounded"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 mobile-s:w-full lg:w-1/2 mobile-s:text-center lg:text-left">
            <StaticImage
              src="../images/contact-us-illustration.jpg"
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
}

export default Contact
