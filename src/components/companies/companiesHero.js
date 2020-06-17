import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import arrow from "../../images/icons/arrow-down-black.svg"

const CompaniesHero = ({ mobile, color }) => {
  return (
    <Container fluid id="companiesHero" className={`bg-${color}`}>
      <Row className="hero-title-row">
        <Col className="position-relative">
          <h1>
            We're here for
            <br />
            you every stage
            <br />
            of your life
          </h1>
        </Col>
      </Row>
      <Row className="hero-cta-row">
        <Col>
          <img src={arrow} alt="" className="arrow" />
          <div className="headline-graffiti">Our Companies</div>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(CompaniesHero)
