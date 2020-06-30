import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

const CompaniesAbout = ({ mobile }) => {
  return (
    <Container fluid id="companiesAbout">
      <Row id="our-situation">
        <Col md={{ size: 10 }} className="left-container">
          {/*
            <div className="cta-graffiti text-blue">Our Situation</div>
            */}

          <h2>
            We wish we didn’t need companies to help us meet basic needs, but
            here we are.
          </h2>
        </Col>
        <Col md={{ size: 10 }} className="right-container">
          <p className="">
            Kairos products change the status quo. We’re taking on foundational
            issues (AKA rent, homebuying, keeping your kid healthy, getting a
            new job) and working on that whole life-affordability thing. So if
            it's broke, our brands are here to fix it. Where the systems have
            failed us, we take on the folks who made the damn thing. See the
            brands that have your back.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(CompaniesAbout)
