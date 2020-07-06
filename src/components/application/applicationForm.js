import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import axios from "axios"
import moment from "moment"

import exit from "../../images/icons/exit-menu.svg"

const ApplicationForm = ({ mobile, user }) => {
  let [verified, setVerified] = useState(false)
  let [success, setSucess] = useState(null)
  function _handleSubmit(e) {
    e.preventDefault()

    let firstName = user && user.firstName ? user.firstName : e.target[0].value
    let lastName = user && user.lastName ? user.lastName : e.target[1].value
    let fullName = firstName + " " + lastName
    let email = user && user.email ? user.email : e.target[2].value
    let phoneNumber = user && user.email ? e.target[0].value : e.target[3].value
    let userState = user && user.email ? e.target[1].value : e.target[4].value
    let zipCode = user && user.email ? e.target[2].value : e.target[5].value
    let adminIntegrationId = _generateId()
    let date = moment().format("YYYY-MM-DD")
    let organizationId = "kairos-1"
    let payload = {
      name: [
        {
          use: "official",
          text: fullName,
          family: lastName,
          given: [firstName],
        },
      ],
      telecom: [
        {
          system: "email",
          value: email,
        },
        {
          system: "phone",
          value: phoneNumber,
        },
      ],
      integrationId: adminIntegrationId,
      hireDate: date,
      organizationIntegrationId: organizationId,
      state: userState,
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
        alert(
          "Oops, something went wrong. Either you've already registered or there is a problem with your information!"
        )
      })
  }

  function _verify() {
    setVerified(verified => !verified)
  }

  function _generateId() {
    return Math.random().toString(36).substr(2, 9)
  }
  return (
    <Container fluid id="applicationForm" className="bg-yellow">
      <Row className="d-flex justify-content-center bg-yellow">
        <Col className="bg-white text-center application-column">
          <Link to="/10kjobs" className="exit-button">
            <img src={exit} alt="" className="mr-1 pb-1" width="17" />
            EXIT
          </Link>
          <h1>
            Complete Your
            <br />
            Application
          </h1>
          <p>
            Please fill in your contact information below so we can make sure
            you get all of the necessary information during your training. After
            submitting, you will receive an email invitation to begin your
            certification.
          </p>

          {success ? (
            <div>
              <h2>
                Thanks for submitting!
                <br />
                Please go check your email for next steps
              </h2>
            </div>
          ) : (
            <form action="" onSubmit={e => _handleSubmit(e)}>
              <div className="input-container">
                {user && user.firstName ? (
                  <div className="pre-filled-input">{user.firstName}</div>
                ) : (
                  <input
                    id="application-firstName"
                    label="firtsName"
                    type="text"
                    htmlFor="firstName"
                    name="firstName"
                    placeholder="First Name*"
                  />
                )}
                {user && user.lastName ? (
                  <div className="pre-filled-input">{user.lastName}</div>
                ) : (
                  <input
                    id="application-lastName"
                    label="lastName"
                    type="text"
                    htmlFor="lastName"
                    name="lastName"
                    placeholder="Last Name*"
                  />
                )}
              </div>
              <div className="input-container">
                {user && user.email ? (
                  <div className="pre-filled-input">{user.email}</div>
                ) : (
                  <input
                    id="application-email"
                    label="email"
                    type="text"
                    htmlFor="email"
                    name="email"
                    placeholder="Email*"
                  />
                )}

                <input
                  id="application-phoneNumber"
                  label="phoneNumber"
                  type="text"
                  htmlFor="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number*"
                />
              </div>
              <div className="input-container">
                <input
                  id="application-state"
                  label="state"
                  type="text"
                  htmlFor="state"
                  name="state"
                  placeholder="Your State*"
                />
                <input
                  id="application-zipCode"
                  label="zipCode"
                  type="text"
                  htmlFor="zipCode"
                  name="zipCode"
                  placeholder="Zip Code*"
                />
              </div>
              <div id="verification-container">
                <button
                  type={verified ? "submit" : "text"}
                  className={`cta button-inline ${!verified && "disabled"}`}
                >
                  Submit
                </button>
                <div id="verification">
                  <input
                    type="checkbox"
                    name="verification"
                    checked={verified}
                    onChange={() => _verify()}
                  />
                  <label htmlFor="verification">I am not a robot</label>
                </div>
              </div>
            </form>
          )}
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile, user: state.global.user }),
  null
)(ApplicationForm)
