import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import JobsHero from "../components/jobs/jobsHero"
import JobsAbout from "../components/jobs/jobsAbout"
import JobsApplication from "../components/jobs/jobsApplication"

const JobsPage = () => {
  let pageColor = "salmon"
  return (
    <Layout jobs footerColor={pageColor}>
      <SEO title="10k Jobs" />
      <JobsHero color={pageColor} />
      <JobsAbout />
      <JobsApplication />
    </Layout>
  )
}

export default JobsPage
