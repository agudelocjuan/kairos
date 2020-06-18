import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import JobsHero from "../components/jobs/jobsHero"
import JobsAbout from "../components/jobs/jobsAbout"
import JobsApplication from "../components/jobs/jobsApplication"
import JobsReviews from "../components/jobs/jobsReviews"
import JobsFAQ from "../components/jobs/jobsFAQ"

const JobsPage = () => {
  let pageColor = "salmon"
  return (
    <Layout jobs footerColor={pageColor}>
      <SEO title="10k Jobs" />
      <JobsHero color={pageColor} />
      <JobsAbout />
      <JobsApplication />
      <JobsReviews />
      <JobsFAQ />
    </Layout>
  )
}

export default JobsPage
