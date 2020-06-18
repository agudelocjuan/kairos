import React, { useRef, useState } from "react"
import { Link, navigate } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { setUser } from "../../state/global"

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
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile, user: state.global.user }),
  null
)(JobsApplication)
