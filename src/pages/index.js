import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Product from "../components/product"
import Portfolio from "../components/portfolio"
import Technology from "../components/technology"
import Client from "../components/client"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Product />
    <div className="-mt-48 mobile-s:-mt-12 md:-mt-24 lg:-mt-36 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,133.3C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
    {/* <h1 className="mt-4">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    <div className="w-1/2 h-12 bg-red-500"></div> */}
    <Portfolio />
    <Technology />
    <Client />
    <div
      className="-mt-48  mobile-s:-mt-12 md:-mt-24 max-w-full"
      style={{ transform: "scale(-1, 1)" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,133.3C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
