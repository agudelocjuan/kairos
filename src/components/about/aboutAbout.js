import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import img_1 from "../../images/about/about_1.png"
import img_2 from "../../images/about/about_2.png"
import arrow from "../../images/icons/arrow-diag-red.svg"

const AboutAbout = ({ mobile }) => {
  return (
    <Container fluid id="aboutAbout" className={`bg-white`}>
      <Row id="the-problem">
        <Col md={{ size: 6, offset: 1 }} className="left-container">
          <div className="cta-graffiti text-salmon">The Problem</div>
          <h2>We've been set up to fail.</h2>
        </Col>
        <Col md="5" className="right-container">
          {mobile ? "" : <img src={img_2} alt="" />}
          {/*
            <p className="pt-md-5">
              We’re the first generation that is projected to do worse than our
              parents financially. Baby boomers only had to work 306 hours to pay
              off college debt, our generation needs to work 4,459. We’re
              overworked and underpaid. Our most fundamental needs are
              inaccessible and unaffordable.
            </p>
          */}
          {mobile ? <img src={img_2} alt="" /> : ""}
        </Col>
      </Row>
      <Row id="the-demand" className="pb-4 pb-md-5">
        <Col xs="12" md="7" className="left-container order-2 order-md-1">
          <img src={img_1} alt="" />
        </Col>
        <Col xs="12" md="5" className="right-container order-1 order-md-2">
          <div className="eyebrow">what's really going on</div>
          <h3>Let’s paint a picture</h3>
          <p>
            We’re the first generation that is projected to do worse than our
            parents financially. We graduate from college with thousands of
            dollars of debt. We rent an apartment that requires an arm and a leg
            in upfront costs. We try to start a family without the savings or
            knowledge to keep them healthy. We think about buying a home, but
            realize it's completely out of reach. And just like that, you
            realize the system has set you up to fail. Basically, we’re stuck in
            financial purgatory.
          </p>
          <Link to="/our-companies" className="cta inline-text-link">
            see how we help <img src={arrow} alt="" />
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(AboutAbout)
