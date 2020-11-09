import React from "react"
import { useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"
import spraypaint from "../../images/global/spraypaint.png"

const CampaignSubHero = ({ mobile }) => {
  const data = useStaticQuery(graphql`
    query {
      subhero: file(relativePath: { eq: "campaigns/house.png" }) {
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
          <h3>About the Campaign</h3>
          <p>
            There are $45 billion locked up in security deposits around the
            country – an average of nearly $1,500 per American renter. For the
            last three years, Kairos has been fighting to get that money back
            into our hands. When the pandemic hit, that mission became our
            priority.
          </p>
          <p>
            <strong>
              Our money is locked away during a time when we need it most.
            </strong>
          </p>
          <p>
            We can't wait any longer. In the face of persistent inaction by the
            federal government, we're working with city and state legislators
            across the country to fight for a Renter Stimulus, the single
            largest housing affordability and rent relief initiative in the
            country. Since March, we've returned over $200 million to renters
            and unlocked $1.3 billion more in cities from coast to coast.{" "}
          </p>
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
      <Row className="img-row">
        <Col md="6">
          <Img fluid={subhero.childImageSharp.fluid} />
        </Col>
        <Col
          md="6"
          className="d-flex flex-column justify-content-center mt-5 mt-md-0 desc-container"
        >
          <img src={spraypaint} alt="spraypaint" className="spraypaint" />
          <h3>How It Works</h3>
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
