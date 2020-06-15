import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import HomeHero from "../components/home/homeHero"
import HomeAbout from "../components/home/homeAbout"
import HomeOurCompanies from "../components/home/homeOurCompanies"
import HomeEmailCapture from "../components/home/homeEmailCapture"

const IndexPage = () => {
  let pageColor = "salmon"
  return (
    <Layout footerColor={pageColor}>
      <SEO title="Home" />
      <HomeHero color={pageColor} />
      <HomeAbout />
      <HomeOurCompanies />
      <HomeEmailCapture />
    </Layout>
  )
}

export default IndexPage
