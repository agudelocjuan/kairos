import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import { setMenu } from "../../state/global"

import facebook from "../../images/icons/facebook-icon-white.svg"
import twitter from "../../images/icons/twitter-icon-white.svg"
import linkedin from "../../images/icons/linkedin-icon-white.svg"
import instagram from "../../images/icons/instagram-icon-white.svg"

const Menu = ({ dispatch, mobile, menu }) => {
  return (
    <Container fluid id="menu" className={`${menu ? "show" : ""}`}>
      <Row className="link-row">
        <Col className="link-col">
          <Link to="/" onClick={() => dispatch(setMenu(false))}>
            <h2>Home</h2>
          </Link>
          <Link to="/about" onClick={() => dispatch(setMenu(false))}>
            <h2>About Us</h2>
          </Link>
          <Link to="/our-companies" onClick={() => dispatch(setMenu(false))}>
            <h2>Our Companies</h2>
          </Link>
          <Link to="/10kjobs" onClick={() => dispatch(setMenu(false))}>
            <h2>10k Jobs</h2>
          </Link>
        </Col>
      </Row>
      <Row className="cta-row">
        <Col
          xs="12"
          md="8"
          className="d-flex flex-column align-items-start text-left flex-md-row align-items-md-center"
        >
          <div className="pr-md-5">
            {!mobile && <p>General Inquiries</p>}
            <a href="mailto:team@kairoshq.com" className="">
              team@kairoshq.com
            </a>
          </div>
          <div className="px-md-5">
            {!mobile && <p>Press</p>}
            <a href="mailto:pr@kairoshq.com" className="">
              pr@kairoshq.com
            </a>
          </div>
          <div className="pl-md-5">
            {!mobile && <p>Investments</p>}
            <a href="mailto:investments@kairoshq.com" className="">
              investments@kairoshq.com
            </a>
          </div>
        </Col>

        <Col
          md="4"
          className="d-flex justify-content-center justify-content-md-end align-items-start align-items-md-center"
        >
          <a href="https://www.facebook.com" className="pl-2">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com" className="pl-2">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.twitter.com" className="pl-2">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.linkedin.com" className="pl-2">
            <img src={linkedin} alt="" />
          </a>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile, menu: state.global.menu }),
  null
)(Menu)
