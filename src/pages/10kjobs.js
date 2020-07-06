import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import JobsHero from "../components/jobs/jobsHero"
import JobsAbout from "../components/jobs/jobsAbout"
import JobsApplication from "../components/jobs/jobsApplication"
import JobsReviews from "../components/jobs/jobsReviews"
import JobsFAQ from "../components/jobs/jobsFAQ"

const JobsPage = ({ location }) => {
  let pageColor = "salmon"
  let borderColor = "site-border-yellow"
  return (
    <Layout
      path={location.pathname}
      borderColor={borderColor}
      jobs
      footerColor={pageColor}
    >
      <SEO title="10k Jobs" />
      <JobsHero color={pageColor} />
      <JobsAbout />
      <JobsApplication />
      <JobsFAQ />
      <JobsReviews />
    </Layout>
  )
}

export default JobsPage
