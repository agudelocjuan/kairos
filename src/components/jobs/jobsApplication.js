import React, { useState } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import addToMailchimp from "gatsby-plugin-mailchimp"
import axios from "axios"
import moment from "moment"

import { setUser } from "../../state/global"

import slider from "../../images/jobs/jobs_slider.gif"
import slider_mobile from "../../images/jobs/jobs_slider_mobile.gif"

const JobsApplication = ({ dispatch, mobile, user }) => {
  let [verified, setVerified] = useState(false)
  let [success, setSucess] = useState(null)
  function _submit(e) {
    e.preventDefault()
    let first = e.target[0].value
    let last = e.target[1].value
    let em = e.target[2].value
    let zip = e.target[3].value
    if (checkValues(first, last, zip)) {
      if (validateEmail(em)) {
        dispatch(
          setUser({
            firstName: first,
            lastName: last,
            email: em,
            zip: zip,
          })
        )

        addToMailchimp(em).then(data => {
          if ((data.result = "success")) {
            submitApplication(first, last, em, zip)
          }
        })
      }
    }
  }
  function submitApplication(first, last, email, zipCode) {
    let payload = {
      name: [
        {
          use: "official",
          text: `${first} ${last}`,
          family: last,
          given: [first],
        },
      ],
      telecom: [
        {
          system: "email",
          value: email,
        },
      ],
      integrationId: _generateId(),
      hireDate: moment().format("YYYY-MM-DD"),
      organizationIntegrationId: "kairos-1",
      licenseNumber: zipCode,
      isInitialTrainingRequired: true,
    }
    axios({
      method: "post",
      url: "/.netlify/functions/createUser",
      data: payload,
    })
      .then(res => {
        setSucess(true)
      })
      .catch(err => {
        setSucess(false)
        console.log(err)
        alert(
          "Oops, something went wrong. Either you've already registered or there is a problem with your information!"
        )
      })
  }
  function checkValues(first, last, zip) {
    if (first.length > 0 && last.length > 0 && zip.length) {
      return true
    }
    alert("Please fill all required fields")
    return false
  }
  function _generateId() {
    return Math.random().toString(36).substr(2, 9)
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
                  You receive an email inviting you to start your training -- up
                  to 60 hours of digital courses and 16 hours of in-person
                  training with a qualified nurse instructor
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
        </Col>
      </Row>

      <Row className="form-row bg-blue">
        {!mobile && (
          <Col
            xs={{ size: 10, offset: 1 }}
            md={{ size: 4, offset: 1 }}
            className="information-column"
          >
            <>
              <h3 className="">How it works</h3>
              <ol>
                <li>
                  <span>
                    Start your application below to kick off your new career
                  </span>
                </li>
                <li>
                  <span>
                    You receive an email inviting you to start your training --
                    up to 60 hours of digital courses and 16 hours of in-person
                    training with a qualified nurse instructor
                  </span>
                </li>
                <li>
                  <span>
                    Our local agency partners will work with you to complete
                    your in-person training and background checks, after which
                    you’ll be placed in your first job!
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
            </>
          </Col>
        )}

        <Col
          xs="12"
          md={{ size: 6, offset: 1 }}
          className={`form-column ${
            success ? "d-flex align-items-center" : ""
          }`}
        >
          {success ? (
            <div className="success-container text-center">
              <div className="cta-graffiti text-salmon">
                Thanks for signing up! Check your email for next steps.
              </div>
            </div>
          ) : (
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
              <input
                id="jobs-zip"
                type="text"
                htmlFor="zip"
                name="zip"
                placeholder="Zip Code*"
              />
              <button type="submit" className="cta button-inline black">
                start your application
              </button>
            </form>
          )}
        </Col>
      </Row>

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
                  Caregivers can have the ultimate discretion on job types they
                  want to apply to, schedules they want to entertain, and hours
                  they want to work.
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
