import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import ApplicationForm from "../components/application/applicationForm"

const ApplicationPage = ({ location }) => {
  let pageColor = "yellow"
  let borderColor = "site-border-yellow"
  return (
    <Layout
      path={location.pathname}
      borderColor={borderColor}
      applicationPage
      footerColor={pageColor}
    >
      <SEO title="Apply" />
      <ApplicationForm />
    </Layout>
  )
}

export default ApplicationPage
