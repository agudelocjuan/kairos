import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import CampaignHero from "../components/campaign/campaignHero"
import CampaignSubHero from "../components/campaign/campaignSubHero"
import CampaignMap from "../components/campaign/campaignMap"
import CampaignPetition from "../components/campaign/campaignPetition"
import CampaignCarousel from "../components/campaign/campaignCarousel"

const CampaignPage = ({ location }) => {
  let pageColor = "salmon"
  let borderColor = "site-border-black"
  return (
    <Layout
      path={location.pathname}
      borderColor={borderColor}
      footerColor={pageColor}
    >
      <SEO title="Rend Relief" />
      <CampaignHero color={pageColor} />
      <CampaignSubHero />
      <CampaignMap />
      <CampaignPetition />
      <CampaignCarousel />
    </Layout>
  )
}

export default CampaignPage
