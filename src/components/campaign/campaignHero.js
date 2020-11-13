import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import graffiti from "../../images/home/hero-graffiti.png"
import arrow from "../../images/icons/arrow-down-black.svg"

const CampaignHero = ({ mobile, color }) => {
  return (
    <Container fluid id="campaignHero" className={`bg-${color}`}>
      <Row className="hero-title-row">
        <Col className="position-relative">
          <img src={graffiti} alt="" />
          <h1>
            WE'RE FIGHTING
            <br />
            FOR $1,400 FOR EVERY
            <br />
            AMERICAN RENTER
          </h1>
        </Col>
      </Row>
      <Row className="hero-subtitle-row">
        <Col>
          <h3>(That's a $45 billion stimulus)</h3>
        </Col>
      </Row>
      <Row className="hero-cta-row">
        <Col>
          <div className="cta mb-3">TELL ME MORE</div>
          <img src={arrow} alt="" className="arrow" />
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(CampaignHero)
