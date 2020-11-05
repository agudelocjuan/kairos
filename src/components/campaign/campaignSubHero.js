import React from "react"
import { useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"

const CampaignSubHero = ({ mobile }) => {
  const data = useStaticQuery(graphql`
    query {
      subhero: file(relativePath: { eq: "campaigns/subhero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { subhero } = data
  return (
    <Container fluid id="campaignSubHero">
      <Row className="text-row first">
        <Col md={{ size: 7 }}>
          <h3>Americans Need Housing Relief</h3>
          <p>
            There is $45 billion locked up in security deposits around the
            country – nearly $1,500 per American renter.
          </p>
          <p>
            For the last 3 years, Kairos has been fighting to get that money
            back into our hands. In 2020, we crossed $200 million returned to
            renters. But when the pandemic hit, we knew there was so much more
            that could be done.
          </p>
        </Col>
      </Row>
      <Row className="text-row second">
        <Col md={{ size: 7 }}>
          <h3 className="">
            Our money is locked away during a time when we need it most.
          </h3>
          <p>
            That’s why we are working with city and state legislators from coast
            to coast to fight for{" "}
            <strong>
              Renter Stimulus: the single largest housing affordability and rent
              relief initiative in the country.
            </strong>{" "}
            So far, we’ve unlocked $1.3 billion in cities across the country but
            we have so much more to do.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Img fluid={subhero.childImageSharp.fluid} />
        </Col>
        <Col
          md="6"
          className="d-flex flex-column justify-content-center mt-5 mt-md-0"
        >
          <h3>HOW IT WORKS</h3>
          <p>
            Our Renter Stimulus plan requires every landlord to give renters the
            option to replace their security deposit with a low-cost monthly
            insurance plan. When tenants choose to enroll in a plan, the
            landlord stays protected from damages and the renter gets their
            security deposit returned.
          </p>
          <p>
            It’s a common-sense, win-win solution that would put $45 billion
            back into renter’s hands and the American economy.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(CampaignSubHero)
