import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import AboutHero from "../components/about/aboutHero"
import AboutAbout from "../components/about/aboutAbout"
import AboutUs from "../components/about/aboutUs"

const AboutPage = ({ location }) => {
  let pageColor = "mustard"
  let borderColor = "site-border-blue"
  return (
    <Layout
      path={location.pathname}
      borderColor={borderColor}
      footerColor={pageColor}
    >
      <SEO title="About" />
      <AboutHero color={pageColor} />
      <AboutAbout />
      <AboutUs />
    </Layout>
  )
}

export default AboutPage
