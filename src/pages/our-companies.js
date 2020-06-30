import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import CompaniesHero from "../components/companies/companiesHero"
import CompaniesAbout from "../components/companies/companiesAbout"
import CompaniesCompanies from "../components/companies/companiesCompanies"

const OurCompaniesPage = ({ location }) => {
  let pageColor = "blue"
  let borderColor = "site-border-orange"
  return (
    <Layout
      path={location.pathname}
      borderColor={borderColor}
      footerColor={pageColor}
    >
      <SEO title="Our Companies" />
      <CompaniesHero color={pageColor} />
      <CompaniesAbout />
      <CompaniesCompanies />
    </Layout>
  )
}

export default OurCompaniesPage
