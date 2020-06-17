import React, { useRef } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

const JobsApplication = ({ mobile }) => {
  function _handleSubmit() {}
  return (
    <Container fluid id="jobsApplication" className="bg-blue">
      <Row className="header-row">
        <Col className="d-flex justify-content-center">
          <div className="cta-graffiti">Apply for this job</div>
        </Col>
      </Row>
      <Row className="form-row">
        <Col md="6" className="information-column">
          <h3>How it works</h3>
          <ol>
            <li>Fill out your information below and click Apply</li>
            <li>
              We’ll navigate you to Care.com where you will complete Phase 1 of
              your training NOTE: This step will require a background check
            </li>
            <li>
              You’ll receive your COVID-19 Responder Certificate and you’ll be
              placed in a new job
            </li>
            <li>Find your next job and join the ranks of homecare heroes!</li>
          </ol>
        </Col>
        <Col xs="12" md="6" className="form-column">
          <form action="">
            <input
              id="jobs-firstName"
              type="text"
              htmlFor="firstName"
              name="firstName"
              placeholder="First Name*"
            />
            <input
              id="jobs-lastName"
              type="text"
              htmlFor="lastName"
              name="lastName"
              placeholder="Last Name*"
            />
            <input
              id="jobs-email"
              type="text"
              htmlFor="email"
              name="email"
              placeholder="Email*"
            />
            <button className="cta button-inline black" onClick={_handleSubmit}>
              start your application
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsApplication)
