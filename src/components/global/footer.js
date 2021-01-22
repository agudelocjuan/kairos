import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Email from "./email"

import degree_blue from "../../images/icons/degree_blue.svg"
import degree_navy from "../../images/icons/degree_navy.svg"
import degree_orange from "../../images/icons/degree_orange.svg"
import degree_yellow from "../../images/icons/degree_yellow.svg"
import degree_gif from "../../images/icons/degree_gif.gif"

import recycle from "../../images/icons/recycle-icon.svg"
import twitter from "../../images/icons/twitter-icon.svg"

const slogans = [
  "Know someone who needs a job ASAP? Just share this.",
  "I got 99 problems and money could solve about 86 of them",
  "Anyone else feel like they know less about COVID now than they did 2 months ago?",
  "Meeting our basic needs should be basic.",
  "Did you know 'status quo' is Latin for 'outdated bullshit'?",
  "We buy $5 lattes because they're cheaper than therapy.",
  "The only thing we feel 'entitled' to is change.",
  "We shouldn't have to work this hard just to break even.",
]

const Footer = ({ color, borderColor, mobile, jobs }) => {
  let [index, setIndex] = useState(_getRandomInt(slogans.length))
  let [hover, setHover] = useState(false)

  let icon = degree_navy
  if (borderColor === "site-border-black") {
    icon = degree_navy
  }
  if (borderColor === "site-border-blue") {
    icon = degree_blue
  }
  if (borderColor === "site-border-orange") {
    icon = degree_orange
  }
  if (borderColor === "site-border-yellow") {
    icon = degree_yellow
  }

  function _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  function _cycle() {
    setIndex(index => _getRandomInt(slogans.length))
  }
  return (
    <Container fluid id="footer" className={`bg-${color}`}>
      <Row id="footer-header-section" className="">
        <Col className="d-flex flex-column">
          <h2>{slogans[index]}</h2>
          <div className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?text=${slogans[
                index
              ].replace(" ", "+")}`}
            >
              <img src={twitter} alt="" />
            </a>

            <img
              onClick={() => _cycle()}
              src={recycle}
              alt=""
              className="recycle"
            />
          </div>
        </Col>
      </Row>
      {mobile ? (
        <Row id="footer-link-section">
          <Col id="footer-email-column" md="6">
            <div id="footer-email-container">
              <Email footer />
            </div>
          </Col>
          <Col id="footer-page-links" md="6">
            <div className="footer-link-column">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/our-companies">Our Companies</Link>
              <Link to="/10kjobs">10k Jobs</Link>
              <a target="_blank" rel="noreferrer noopener" href="https://jobs.kairoshq.com">Careers</a>
              <Link to="/contact">Contact Us</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="footer-link-column">
              {/* <a href="https://www.facebook.com/TheKairosSociety/">Facebook</a> */}
              <a href="/blog">Blog</a>
              <a href="https://www.linkedin.com/company/kairoshq">Linkedin</a>
              <a href="https://www.instagram.com/kairoshq/">Instagram</a>
              <a href="https://www.Twitter.com/Kairoshq">Twitter</a>
              <img src={icon} className="footer-icon" alt="" />
            </div>
          </Col>
        </Row>
      ) : (
        <Row id="footer-link-section">
          <Col id="footer-page-links" md="6">
            <div className="footer-link-column">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/our-companies">Our Companies</Link>
              <a href="mailto:team@kairoshq.com?subject=Inquiry About (***Your Inquiry Here***)">
                Contact Us
              </a>
            </div>
            <div className="footer-link-column">
              <Link to="/10kjobs">10k Jobs</Link>
              <a target="_blank" rel="noreferrer noopener" href="https://jobs.kairoshq.com">Careers</a>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="footer-link-column">
              <a href="/blog">Blog</a>
              <a href="https://www.Linkedin.com/kairoshq">Linkedin</a>
              <a href="https://www.Instagram.com/kairoshq">Instagram</a>
              <a href="https://www.Twitter.com/kairoshq">Twitter</a>
            </div>
          </Col>
          <Col id="footer-email-column" md="6">
            <div id="footer-email-container">
              <Email footer />
            </div>
            <img
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              src={hover ? degree_gif : icon}
              className="footer-icon"
              alt=""
            />
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default connect(state => ({ mobile: state.global.mobile }), null)(Footer)
