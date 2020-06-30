import React, { useState } from "react"
import { connect } from "react-redux"
import addToMailchimp from "gatsby-plugin-mailchimp"

import arrow from "../../images/icons/arrow-right-white.svg"

const Email = ({ mobile, footer = false }) => {
  let [subscribed, setSubscribed] = useState(false)
  let [showSubmit, setShowSubmit] = useState(false)
  function _submit(e) {
    e.preventDefault()
    let email = e.target[0].value
    if (ValidateEmail(email)) {
      addToMailchimp(email).then(data => {
        if ((data.result = "success")) {
          setSubscribed(true)
        }
      })
    }
  }
  function ValidateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    alert("You have entered an invalid email address!")
    return false
  }
  return footer ? (
    <div id="email-form-outer">
      {subscribed ? (
        <div>Thank you for signing up! Check your inbox for updates.</div>
      ) : (
        <div id="email-signup-container">
          <div id="email-cta">
            Want more Kairos?{mobile ? <br /> : " "}Plug in your email.
          </div>
          <form action="" onSubmit={e => _submit(e)}>
            <input
              id="email-input"
              type="text"
              htmlFor="email"
              name="email"
              placeholder="ENTER YOUR EMAIL"
            />
            <input id="submit-button" type="submit" value="GO" />
          </form>
        </div>
      )}
    </div>
  ) : (
    <div className="email-form-main">
      <form action="" onSubmit={e => _submit(e)}>
        <input
          id="email-input-main"
          onFocus={() => setShowSubmit(true)}
          onBlur={() => setShowSubmit(false)}
          type="text"
          htmlFor="email"
          name="email"
          placeholder="Sign Up For Updates"
        />
        <button
          className={`${showSubmit ? "show" : ""}`}
          id="submit-button-main"
          type="submit"
        >
          <img src={arrow} alt="" />
        </button>
      </form>
    </div>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(Email)
