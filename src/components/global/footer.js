import { Link } from "gatsby"
import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Email from "./email"

import degree from "../../images/icons/degree-icon.png"
import recycle from "../../images/icons/recycle-icon.svg"
import twitter from "../../images/icons/twitter-icon.svg"

const Footer = ({ color, mobile }) => {
  return (
    <Container fluid id="footer" className={`bg-${color}`}>
      <Row id="footer-header-section" className="">
        <Col className="d-flex">
          <h2>I got 99 problems and money could solve about 86 of them</h2>
        </Col>
      </Row>
      {mobile ? (
        <Row id="footer-link-section">
          <Col id="footer-email-column" md="6">
            <div id="footer-email-container">
              <Email />
            </div>
          </Col>
          <Col id="footer-page-links" md="6">
            <div className="footer-link-column">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/our-companies">Our Companies</Link>
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
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-link-column">
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
