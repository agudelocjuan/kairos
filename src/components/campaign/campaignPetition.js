import React from "react"
import { Container, Row, Col } from "reactstrap"

const CampaignPetition = ({}) => {
  return (
    <Container fluid id="campaignPetition">
      <Row>
        <Col md="8">
          <div className="cta-graffiti text-salmon mb-5">What Can you do?</div>
          <p>
            Our renter stimulus plan works. It has put more money into the hands
            of American renters than any other program aside from the CARES Act
            passed by Congress in March 2020. More than 50 city and state
            elected officials have signed an open letter calling for the renter
            stimulus.
          </p>
          <p>
            This plan makes a difference because it <strong>makes sense</strong>
            . But we need <strong>your help</strong>.
          </p>
          <p>
            We live in a world that often pays attention to controversy over
            common-sense. We need your voice to help us break through the noise.
            Sign our petition to tell your city and state legislators that
            renter stimulus is a common-sense policy that you want adopted.
          </p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="cta button-inline bg-salmon w-100"
            href="https://www.change.org/p/local-politicians-use-security-deposits-to-cover-rent"
          >
            Sign the Petition
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default CampaignPetition
