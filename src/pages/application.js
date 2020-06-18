import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import ApplicationForm from "../components/application/applicationForm"

const ApplicationPage = ({}) => {
  let pageColor = "yellow"
  return (
    <Layout applicationPage footerColor={pageColor}>
      <SEO title="Apply" />
      <ApplicationForm />
    </Layout>
  )
}

export default ApplicationPage
