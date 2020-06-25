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
          <p>
            From the moment we hit adulthood, we're slammed with never-ending
            costs—working to break even from the time we step into the “real
            world.” Our generation’s had enough. We’re here to create change by
            dismantling tired structures and putting in the work to build new
            ones.
          </p>
          <p className="p-button-padding">Let’s make it how it should be.</p>
          <Link className="cta button-inline" to="/about">
            <span>find out more</span>
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
