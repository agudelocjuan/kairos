import React, { useRef } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import care_logo from "../../images/jobs/care-logo.png"
import kairos_logo from "../../images/jobs/kairos-logo.png"
import care_academy_logo from "../../images/jobs/care-academy-logo.png"

import job from "../../images/jobs/need-a-job.png"
import works from "../../images/jobs/how-this-works.png"

const JobsHero = ({ mobile }) => {
  const ref = React.createRef()
  const _handleClick = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      offset: "50px",
    })
  }
  return (
    <Container fluid id="jobsAbout">
      <div className="offset-button-container">
        <div
          className="cta button-inline black mb-4 mt-3 mb-md-5"
          onClick={_handleClick}
        >
          Apply Now
        </div>
      </div>
      {/*
        <Row id="logo-row">
          <Col xs="12">
            <div className="navigational-graffiti text-salmon text-center">
              brought to you by
            </div>
          </Col>
          <Col className="logo-col" xs="4">
            <img src={care_logo} alt="" />
          </Col>
          <Col className="logo-col" xs="4">
            <img src={kairos_logo} alt="" />
          </Col>
          <Col className="logo-col" xs="4">
            <img src={care_academy_logo} alt="" />
          </Col>
        </Row>
        */}

      <Row className="image-rows top">
        <Col md={{ size: 6 }} className="floating-col">
          <h2 className="pb-3">Join us on the front lines of healthcare.</h2>
          <p>
            We’re helping 10,000 people begin a new career in home care. Apply
            now to begin your training and start earning income in as little as
            10 days.
          </p>
        </Col>
        {!mobile && (
          <Col md={{ size: 6 }}>
            <div
              className="h-100 w-100"
              style={{
                background: `url(${job})`,
                backgroundPosition: `center center`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
              }}
            ></div>
          </Col>
        )}

        {mobile && (
          <Col>
            <img src={job} alt="" />
          </Col>
        )}
      </Row>
      <Row className="image-rows bottom">
        {!mobile && (
          <Col md="6">
            <div
              className="h-100 w-100"
              style={{
                background: `url(${works})`,
                backgroundPosition: `center top`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
              }}
            ></div>
          </Col>
        )}

        <Col md={{ size: 5, offset: 0 }} className="floating-col">
          <h3>About The Campaign</h3>
          <p>
            In the past few months, over 40 million Americans have lost their
            jobs. We want to help.
          </p>
          <p>
            After successfully launching a job creation plan in the UK with our
            healthcare company, Cera, and the Ministry of Health - we are now
            bringing this effort Stateside. Kairos has partnered with Care
            Academy and Care.com to place 10,000 Americans into jobs as Home
            Care providers. To help prepare you for these jobs, we are providing
            applicants free training and certification to become a Home Health
            Aid (HHA). It’s an opportunity to begin a rewarding career in
            healthcare taking care of our nation’s most vulnerable, during a
            time of unprecedented need.
          </p>
          <p>Welcome to the Home Care Heroes Campaign.</p>
        </Col>
        {mobile ? (
          <Col>
            <img src={works} alt="" />
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsHero)
