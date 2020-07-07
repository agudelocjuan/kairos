import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { setUser } from "../../state/global"

import slider from "../../images/jobs/jobs_slider.gif"
import slider_mobile from "../../images/jobs/jobs_slider_mobile.gif"

const JobsApplication = ({ dispatch, mobile, user }) => {
  function _submit(e) {
    e.preventDefault()
    let first = e.target[0].value
    let last = e.target[1].value
    let em = e.target[2].value
    if (checkValues(first, last)) {
      if (validateEmail(em)) {
        dispatch(
          setUser({
            firstName: first,
            lastName: last,
            email: em,
          })
        )

        addToMailchimp(em).then(data => {
          if ((data.result = "success")) {
            navigate("/application")
          }
        })
      }
    }
  }
  function checkValues(first, last) {
    if (first.length > 0 && last.length > 0) {
      return true
    }
    alert("Please enter your name")
    return false
  }
  function validateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    alert("You have entered an invalid email address!")
    return false
  }
  return (
    <Container fluid id="jobsApplication" className="">
      {mobile && (
        <Row className="form-row">
          <Col
            xs={{ size: 10, offset: 1 }}
            md={{ size: 4, offset: 1 }}
            className="information-column mb-4"
          >
            <h3>How it works</h3>
            <ol>
              <li>
                <span>
                  Start your application below to kick off your new career
                </span>
              </li>
              <li>
                <span>
                  You receive an email inviting you to start your HHA training
                  -- 60 hours of digital courses and 15 hours of in-person
                  training
                </span>
              </li>
              <li>
                <span>
                  Our local agency partners will work with you to complete your
                  in-person training and background checks, after which you’ll
                  be placed in your first job!
                </span>
              </li>
              <li>
                <span>
                  Our partners at Care.com will also grant you access to
                  additional employment opportunities via their platform
                </span>
              </li>

              <li>
                <span>
                  Congratulations on your new career! This is the first
                  milestone on your path towards earning your LPN and RN
                  degrees.
                </span>
              </li>
            </ol>
          </Col>
        </Row>
      )}
      <Row className="header-row bg-blue">
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <div className="cta-graffiti">Apply for this job</div>
          {mobile && (
            <div className="d-flex justify-content-center w-100 mt-5">
              <a
                className="cta button-inline black mb-4 mt-3 mb-md-5 w-75 text-center"
                href="https://team882226.typeform.com/to/OdNt3N0v"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
          )}
        </Col>
      </Row>

      {!mobile && (
        <Row className="form-row bg-blue">
          <Col
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
            className="information-column"
          >
            <h3 className="text-center">How it works</h3>
            <ol>
              <li>
                <span>
                  Start your application below to kick off your new career
                </span>
              </li>
              <li>
                <span>
                  You receive an email inviting you to start your HHA training
                  -- 60 hours of digital courses and 15 hours of in-person
                  training
                </span>
              </li>
              <li>
                <span>
                  Our local agency partners will work with you to complete your
                  in-person training and background checks, after which you’ll
                  be placed in your first job!
                </span>
              </li>
              <li>
                <span>
                  Our partners at Care.com will also grant you access to
                  additional employment opportunities via their platform
                </span>
              </li>

              <li>
                <span>
                  Congratulations on your new career! This is the first
                  milestone on your path towards earning your LPN and RN
                  degrees.
                </span>
              </li>
            </ol>
            <div className="d-flex justify-content-center w-100 mt-5">
              <a
                className="cta button-inline black mb-4 mt-3 mb-md-5 w-75 text-center"
                href="https://team882226.typeform.com/to/OdNt3N0v"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
          </Col>
        </Row>
      )}

      <Row className="list-item-row bg-white">
        <Col md={{ size: 7 }} className="text-center">
          <Row>
            <Col>
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile, user: state.global.user }),
  null
)(JobsApplication)
