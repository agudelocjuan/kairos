import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import AboutHero from "../components/about/aboutHero"
import AboutAbout from "../components/about/aboutAbout"
import AboutUs from "../components/about/aboutUs"

const AboutPage = ({}) => {
  let pageColor = "mustard"
  return (
    <Layout footerColor={pageColor}>
      <SEO title="About" />
      <AboutHero color={pageColor} />
      <AboutAbout />
      <AboutUs />
    </Layout>
  )
}

export default AboutPage
