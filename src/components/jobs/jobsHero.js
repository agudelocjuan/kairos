import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import graffiti from "../../images/home/hero-graffiti.png"
import arrow from "../../images/icons/arrow-down-black.svg"

const JobsHero = ({ mobile, color }) => {
  return (
    <Container fluid id="jobsHero" className={`bg-${color}`}>
      <Row className="hero-title-row">
        <Col className="position-relative d-flex justify-content-center align-items-center">
          <img src={graffiti} alt="" />
          <h1>
            We're creating
            <br />
            10,000 new jobs
            <br />
            #HomeCareHeroes
          </h1>
        </Col>
      </Row>
      <Row className="hero-cta-row">
        <Col className="">
          <img src={arrow} alt="" className="arrow" />
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsHero)
