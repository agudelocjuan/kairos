import React, { useRef, useState } from "react"
import { Link, navigate } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { setUser } from "../../state/global"

import slider from "../../images/jobs/jobs_slider.gif"
import slider_mobile from "../../images/jobs/jobs_slider_mobile.gif"

const JobsApplication = ({ dispatch, mobile, user }) => {
  let [subscribed, setSubscribed] = useState(false)
  let [showSubmit, setShowSubmit] = useState(false)
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
            setSubscribed(true)
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
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    alert("You have entered an invalid email address!")
    return false
  }
  return (
    <Container fluid id="jobsApplication" className="">
      <Row className="header-row bg-blue">
        <Col className="d-flex justify-content-center">
          <div className="cta-graffiti">Apply for this job</div>
        </Col>
      </Row>
      <Row className="form-row bg-blue">
        <Col md={{ size: 4, offset: 1 }} className="information-column">
          <h3>How it works</h3>
          <ol>
            <li>
              <span>
                Start your appliacation below to kick off your new career
              </span>
            </li>
            <li>
              <span>
                Take an introductory course on home care and start getting
                placed into initial job opportunities with our partners at
                Care.com
              </span>
            </li>
            <li>
              <span>
                Meanwhile, continue your training with our partners at
                CareAcademy to get certified and hired into an agency as a
                licensed Home Health Aid (HHA) - your first major milestone in a
                new healthcare career.
              </span>
            </li>
            <li>
              <span>Start your new career!</span>
            </li>
          </ol>
        </Col>
        <Col xs="12" md={{ size: 6, offset: 1 }} className="form-column">
          <form action="" onSubmit={e => _submit(e)}>
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
            <button type="submit" className="cta button-inline black">
              start your application
            </button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={mobile ? slider_mobile : slider}
            alt="jobs-gif"
            className="w-100"
          />
        </Col>
      </Row>
      <Row className="list-item-row bg-white">
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
