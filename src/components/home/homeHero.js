import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import graffiti from "../../images/home/hero-graffiti.png"
import arrow from "../../images/icons/arrow-down-black.svg"

const HomeHero = ({ mobile, color }) => {
  let [index, setIndex] = useState(0)
  const slogans = [
    "rent.",
    "student loans",
    "buying a home",
    "healthcare",
    "the big questions.",
    "the little questions.",
    "real life shit.",
  ]
  useEffect(() => {
    const updateIdx = setInterval(() => {
      _updateIndex()
    }, 2000)
    return () => {
      clearInterval(updateIdx)
    }
  }, [index])

  function _updateIndex() {
    index === slogans.length - 1
      ? setIndex(index => 0)
      : setIndex(index => index + 1)
  }
  return (
    <Container fluid id="homeHero" className={`bg-${color}`}>
      <Row className="hero-title-row">
        <Col className="position-relative">
          <img src={graffiti} alt="" />
          <h1>
            We're Kairos HQ.
            <br />
            We help you navigate
            <br />
            {slogans[index]}
          </h1>
        </Col>
      </Row>
      <Row className="hero-cta-row">
        <Col>
          <img src={arrow} alt="" className="arrow" />
          <div className="headline-graffiti">Join the movement</div>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(HomeHero)
