import React from "react"
import { useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"

import arrow from "../../images/icons/arrow-down-white.svg"

const CampaignMap = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "campaigns/map.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { map } = data
  return (
    <Container fluid id="campaignMap">
      <Row className="d-flex justify-content-center">
        <Col md="8">
          <h3 className="text-white">
            How Much Renter Stimulus is Available in Your City?
          </h3>
          <p className="text-white">
            We’re working with city and state legislators around the country to
            make the $45 billion Renter Stimulus a reality.
          </p>
          <p className="text-white">
            Check out our map to see how much we’ve unlocked in your city and
            where we’re going next!
          </p>
          <p className="cta text-salmon mb-3">HELP US GET THERE</p>
          <img src={arrow} alt="white arrow down" className="arrow" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md="8">
          <Img fluid={map.childImageSharp.fluid} />
          <p className="mt-5 text-white">
            ** In April, Governor Andrew Cuomo issued an executive order that
            temporarily allowed residents to use their security deposits as rent
            payment. Scroll down to learn more about what you can do to make
            Renter Stimulus a permanent fixture in New York.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
export default CampaignMap
