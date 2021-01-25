import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { motion, AnimatePresence } from "framer-motion"
import { setMobile } from "../../state/global"

import EmailPopup from "./email--popup"

import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"

import crossWhite from "../../images/icons/cross-white.svg"

import "../../styles/index.scss"

const Layout = ({
  children,
  dispatch,
  footerColor,
  menu,
  path,
  mobile,
  borderColor,
  pageColor,
  applicationPage = false,
  jobs = false,
}) => {
  let [colorIndex, setColorIndex] = useState(0)
  let colorCount = 3
  useEffect(() => {
    _onWindowResize()
    window.addEventListener("resize", _onWindowResize)
  }, [])

  function _onWindowResize() {
    if (window.innerWidth <= 768) {
      dispatch(setMobile(true))
    } else {
      dispatch(setMobile(false))
    }
  }

  const duration = 0.25

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration * 2,
        when: "afterChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  // email code

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

  const [isEmailActive, setEmailActive] = useState(null);

  const handleEmailToggle = () => {
    setEmailActive(!isEmailActive);
  };

  if ( !isEmailActive ) {
    setTimeout(()=> handleEmailToggle(),5000)
  }

  // code for showing timed popup
  // setTimeout(()=> handleEmailToggle(),5000)
  
  function _onSelect() {
    setTimeout(() => {
      colorIndex === colorCount
        ? setColorIndex(colorIndex => 0)
        : setColorIndex(colorIndex => colorIndex + 1)
    }, 100)
  }

  return (
    <div id="site-background" className={`${menu && "stop-scroll"}`}>
      {!applicationPage && <Header />}
      <Menu />
      <div
        id="site-container"
        data-hightlight={colorIndex}
        onMouseDown={_onSelect.bind(this)}
        className={isEmailActive ? "email-active" : null}
      >
        <main className={pageColor}>
          {children}
        </main>
        <Footer jobs={jobs} color={footerColor} borderColor={borderColor} />
      </div>

      <div id="email-popup" className={isEmailActive ? "active" : null}>
        <img className="email-toggle" src={crossWhite} onClick={handleEmailToggle} />
        {subscribed ? (
          <div>Thank you for signing up! Check your inbox for updates.</div>
        ) : (
          <div id="email-signup-container">
            <div id="email-cta">
              help us help you.
            </div>
            <div id="email-subtitle">
              Let’s navigate these tough times together. Always helpful, never harmful.
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
    </div>
  )
}

export default connect(
  state => ({ mobile: state.global.mobile, menu: state.global.menu }),
  null
)(Layout)
