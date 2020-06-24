import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Email from "./email"

import degree from "../../images/icons/degree-icon.png"
import recycle from "../../images/icons/recycle-icon.svg"
import twitter from "../../images/icons/twitter-icon.svg"

const slogans = [
  "Know someone who needs a job ASAP?  Just share this.",
  "I got 99 problems and money could solve about 86 of them",
  "Anyone else feel like they know less about COVID now than they did 2 months ago?",
  "Meeting our basic needs should be basic.",
  "Did you know 'status quo' is Latin for 'outdated bullshit'?",
  "We buy $5 lattes because they're cheaper than therapy.",
  "The only thing we feel 'entitled' to is change.",
  "We shouldn't have to work this hard just to break even.",
]

const Footer = ({ color, mobile, jobs }) => {
  let [index, setIndex] = useState(_getRandomInt(slogans.length))

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

            <img onClick={() => _cycle()} src={recycle} alt="" />
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
              <Link to="/10k-jobs">10k Jobs</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/">Terms</Link>
              <Link to="/about">Privacy Policy</Link>
            </div>
            <div className="footer-link-column">
              <a href="https://www.facebook.com">Facebook</a>
              <a href="https://www.Linkedin.com">Linkedin</a>
              <a href="https://www.Instagram.com">Instagram</a>
              <a href="https://www.Twitter.com">Twitter</a>
              <img src={degree} className="footer-icon" alt="" />
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
              <Link to="/10k-jobs">10k Jobs</Link>
              <Link to="/">Terms</Link>
              <Link to="/about">Privacy Policy</Link>
            </div>
            <div className="footer-link-column">
              <a href="https://www.facebook.com">Facebook</a>
              <a href="https://www.Linkedin.com">Linkedin</a>
              <a href="https://www.Instagram.com">Instagram</a>
              <a href="https://www.Twitter.com">Twitter</a>
            </div>
          </Col>
          <Col id="footer-email-column" md="6">
            <div id="footer-email-container">
              <Email footer />
            </div>
            <img src={degree} className="footer-icon" alt="" />
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default connect(state => ({ mobile: state.global.mobile }), null)(Footer)
