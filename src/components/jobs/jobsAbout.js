import React, { useRef } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import care_logo from "../../images/jobs/care-logo.png"
import kairos_logo from "../../images/jobs/kairos-logo.png"
import care_academy_logo from "../../images/jobs/care-academy-logo.png"

import hands from "../../images/jobs/hands.png"
import flowers from "../../images/jobs/flowers.png"
import hands_mobile from "../../images/jobs/hands-mobile.png"
import flowers_mobile from "../../images/jobs/flowers-mobile.png"

const JobsHero = ({ mobile }) => {
  const ref = React.createRef()
  const _handleClick = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
      <Row id="logo-row">
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
      <Row className="image-rows">
        {mobile ? "" : <img src={hands} alt="" />}
        <Col md={{ size: 6, offset: 1 }} className="floating-col">
          <div className="cta-graffiti text-salmon pb-5">Need A Job?</div>
          <h3>
            Start a new career in the next 10 days and be a hero for our
            healthcare system.
          </h3>
          <h3>Join the Care Campaign.</h3>
        </Col>
        {mobile ? (
          <Col>
            <img src={hands_mobile} alt="" />
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Row className="image-rows">
        {mobile ? "" : <img src={flowers} alt="" />}

        <Col md={{ size: 6, offset: 6 }} className="floating-col">
          <h3>how this works</h3>
          <p>
            The COVID 19 pandemic has overwhelmed our healthcare system, put
            senior citizens across the country at risk, and destroyed millions
            of jobs. We{"'"}re equipping a generation to actually do something
            about it. Kairos, CareAcademy and Care.com will train, certify, and
            provide access for 10,000 professional caregivers to build rewarding
            new careers caring for our most vulnerable population
          </p>
          <p>
            <span>1.</span> Start your appliacation below to kick off your new
            career
          </p>
          <p>
            <span>2.</span> Get certified through CareAcademy's digital training
            in as little as 10 days (no previous experience needed)
          </p>
          <p>
            <span>3.</span> Once certified, our partners at Care.com will match
            you with a home
          </p>
          <p>
            <span>4.</span> Begin your new career!
          </p>
        </Col>
        {mobile ? (
          <Col>
            <img src={flowers_mobile} alt="" />
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Row className="list-item-row">
        <Col md={{ size: 6 }} className="text-center">
          <Row>
            <Col>
              <div className="cta-graffiti">We Need You!</div>
              <h3 className="pt-5 pb-4">what is the job like?</h3>
              <ul className="text-left">
                <li>
                  Professional caregivers provide personal care in the comfort
                  and safety of a client’s home.
                </li>
                <li>
                  Personal care is tailored to the unique needs of each client
                  and includes everyday tasks such as managing medication,
                  preparing meals, supporting mobility, and assisting with
                  hygiene.
                </li>
                <li>
                  While challenging and diverse, caregiving is also highly
                  rewarding. Our caregivers build real relationships with
                  clients and their families
                </li>
              </ul>
              <h3 className="pt-5 pb-4">How do i know if it's right for me?</h3>
              <ul className="text-left">
                <li>
                  You enjoy helping others and giving back to your community.
                </li>
                <li>
                  You have experience in customer facing roles like retail,
                  hospitality, or food service.
                </li>
                <li>
                  You’re a “people person” with strong communication skills,
                  patience, and a good sense of humor.
                </li>
                <li>You want a flexible schedule with competitive pay.</li>
                <li>
                  You’re ready to start a new career with growth potential.
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <div ref={ref} />
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsHero)
