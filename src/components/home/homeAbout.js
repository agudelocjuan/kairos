import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import graffiti from "../../images/home/about-graffiti.png"

const HomeAbout = ({ mobile }) => {
  return (
    <Container fluid id="homeAbout" className={`bg-white`}>
      <Row className="h-100">
        <Col
          md="6"
          className="left-container"
          style={{
            backgroundImage: `url(${graffiti})`,
            backgroundPosition: `top left`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `contain`,
          }}
        >
          <h3>
            We build companies that have your back on the issues that matter.
          </h3>
        </Col>
        <Col md="6" className="right-container">
          <p className="p-button-padding">
            Our brands give you more than just another thing to buy. Whether
            it's lowering the upfront cost of rent or getting your child the
            nutrition they need, we've got you covered.
          </p>
          <Link className="cta button-inline" to="/our-companies">
            <span>Our Solutions</span>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(HomeAbout)
