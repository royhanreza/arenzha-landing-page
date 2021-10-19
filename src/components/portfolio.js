import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Wrapper from "./wrapper"
import { Tab } from "@headlessui/react"
import { Inbox } from "react-feather"

const Portfolio = () => {
  const [tabs] = React.useState(["All", "Website", "Mobile", "Lainnya"])
  return (
    <section className="pt-5 pb-20 mobile-s:pb-5" id="portfolio">
      <Wrapper>
        <h1 className="text-3xl mobile-s:text-lg font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2">
          Portofolio
        </h1>
        <p className="text-center text-gray-600 mobile-s:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="mt-10">
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {tabs.map((tab, index) => (
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-white mobile-s:text-xs mx-1 bg-blue-600 rounded px-4 py-1"
                      : "text-blue-600  mobile-s:text-xs mx-1 rounded px-4 py-1 hover:bg-gray-100"
                  }
                  key={tab}
                >
                  {tab}
                </Tab>
              ))}
              {/* <Tab className="text-white mx-1 bg-blue-600 rounded px-4 py-1">
                All
              </Tab>
              
              <Tab className="text-blue-600 mx-1 rounded px-4 py-1">Mobile</Tab>
              <Tab className="text-blue-600 mx-1 rounded px-4 py-1">
                Lainnya
              </Tab> */}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="mt-10 mobile-s:mt-5 grid grid-cols-3 mobile-s:grid-cols-1 gap-4 mobile-s:gap-3">
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/portfolio-1.webp"
                        // width={64}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer col-span-2 mobile-s:col-span-1 row-span-2 mobile-s:row-span-1">
                    <div>
                      <StaticImage
                        src="../images/portfolio-2.webp"
                        // width={64}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/portfolio-3.webp"
                        // width={64}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="py-24">
                  <div className="flex justify-center">
                    <Inbox className="text-center text-gray-300" size={96} />
                  </div>
                  <p className="text-gray-300 text-center">No Content</p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="py-24">
                  <div className="flex justify-center">
                    <Inbox className="text-center text-gray-300" size={96} />
                  </div>
                  <p className="text-gray-300 text-center">No Content</p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="py-24">
                  <div className="flex justify-center">
                    <Inbox className="text-center text-gray-300" size={96} />
                  </div>
                  <p className="text-gray-300 text-center">No Content</p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* <div className="text-center mt-10">
          <Link
            to="#"
            className="px-4 py-3 border border-blue-600 text-blue-600 rounded-sm text-sm"
          >
            Semua Portofolio
          </Link>
        </div> */}
      </Wrapper>
    </section>
  )
}

export default Portfolio
