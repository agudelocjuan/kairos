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
      <Row className="image-rows top">
        {!mobile && <img src={hands} alt="" />}
        <Col md={{ size: 6, offset: 1 }} className="floating-col">
          <div className="cta-graffiti text-salmon pb-5">Need A Job?</div>
          <h3>
            Start a new career in the next 10 days and become a homecare hero.
          </h3>
          <h3>Join the Care Campaign.</h3>
        </Col>
        {mobile && (
          <Col>
            <img src={hands_mobile} alt="" />
          </Col>
        )}
      </Row>
      <Row className="image-rows bottom">
        {!mobile && (
          <Col md="6">
            <div
              className="h-100 w-100"
              style={{
                background: `url(${flowers})`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
              }}
            ></div>
          </Col>
        )}

        <Col md={{ size: 5, offset: 0 }} className="floating-col">
          <h3>how this works</h3>
          <p>
            The COVID 19 pandemic has overwhelmed our healthcare system, put
            older adults across the country at risk, and destroyed millions of
            jobs. At the same time, there is a growing shortage for senior care
            professionals, to help care for this at-risk population. We’re
            equipping a generation of homecare heroes to actually do something
            about it.
          </p>
          <p>
            Kairos, CareAcademy and Care.com will train, certify, and provide
            access for 10,000 professional caregivers to build rewarding new
            careers caring for our most vulnerable communities.
          </p>
          <ol>
            <li>
              <span>
                Start your appliacation below to kick off your new career
              </span>
            </li>
            <li>
              <span>
                Get certified through CareAcademy's digital training in as
                little as 10 days (no previous experience needed)
              </span>
            </li>
            <li>
              <span>
                Once trained, our partners at Care.com will provide you with the
                platform to search for, find and match with your first care
                role.
              </span>
            </li>
            <li>
              <span>Begin your new career!</span>
            </li>
          </ol>
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
        <Col md={{ size: 7 }} className="text-center">
          <Row>
            <Col>
              {/*<div className="cta-graffiti">We Need You!</div>*/}
              <h3 className="pt-5 pb-4">what is the job like?</h3>
              <ul className="text-left">
                <li>
                  Professional caregivers provide the support necessary for our
                  older adults to remain secure, independent and happy while
                  living at home.
                </li>
                <li>
                  Care is tailored to the unique needs of each client and
                  includes everyday tasks such as meals & errands,
                  transportation, personal care, and mobility assistance.
                </li>
                <li>
                  Caregivers have the ultimate discretion on job types they want
                  to apply to, schedules they want to entertain, and hours they
                  want to work.
                </li>
              </ul>
              <h3 className="pt-5 pb-4">How do i know if it's right for me?</h3>
              <ul className="text-left">
                <li>
                  You are compassionate and enjoy helping others and giving back
                  to your community.
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
                <li ref={ref}>
                  You’re ready to start a new career with growth potential.
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsHero)
