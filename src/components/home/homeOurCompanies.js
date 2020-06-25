import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import companies from "../../images/home/home-our-companies.png"
import arrow from "../../images/icons/arrow-diag-red.svg"
import img_1 from "../../images/home/img-lineup-one.png"
import img_2 from "../../images/home/img-lineup-two.png"
import img_3 from "../../images/home/img-lineup-three.png"
import img_4 from "../../images/home/img-lineup-four.png"
import ig from "../../images/icons/instagram-icon.svg"

const HomeOurCompanies = ({ mobile }) => {
  return (
    <Container fluid id="homeOurCompanies">
      <Row id="our-companies-row" className="pb-4 pb-md-4">
        <Col xs="12" md="7" className="left-container">
          <img src={companies} alt="" />
        </Col>
        <Col xs="12" md="5" className="right-container">
          <div className="eyebrow">why we're here</div>
          <h3>It’s time to demand more from companies.</h3>
          <p>
            Our brands give you more than just another thing to buy. Whether
            it's lowering the upfront cost of rent or getting your child the
            nutrition they need, we’ve got you covered.
          </p>
          <Link to="/our-companies" className="cta inline-text-link">
            meet our solutions <img src={arrow} alt="" />
          </Link>
        </Col>
      </Row>
      <Row
        id="ten-k-jobs-row"
        className="d-flex justify-content-center bg-blue"
      >
        <Col
          md="7"
          className="d-flex flex-column align-items-center text-center"
        >
          <h3 className="text-salmon pt-4 pt-md-5">
            what's happening right now
          </h3>
          <div className="pb-4 cta-graffiti">
            We're creating
            <br />
            10,000 Jobs!
          </div>
          <div className="pb-3 w-75 text-center">
            Start a new career in as little as 10 days by becoming a homecare
            hero. We need more people on the frontlines of healthcare right now,
            supporting the most vulnerable members of our community.
          </div>
          <Link
            to="/10k-jobs"
            className="cta button-inline black mb-4 mt-3 mb-md-5"
          >
            Apply Now
          </Link>
        </Col>
      </Row>
      <Row id="image-frames-row bg-white" className="pt-5">
        <Col md="3" className="pb-4 pb-md-0">
          <img src={img_1} alt="" />
        </Col>
        <Col md="3" className="pb-4 pb-md-0">
          <img src={img_2} alt="" />
        </Col>
        <Col md="3" className="pb-4 pb-md-0">
          <img src={img_3} alt="" />
        </Col>
        <Col md="3" className="pb-4 pb-md-0">
          <img src={img_4} alt="" />
        </Col>
      </Row>
      <Row className="pb-4 pb-md-5 d-flex justify-content-center">
        <a
          href="https://instagram.com/kairoshq"
          target="_blank"
          rel="noopener noreferrer"
          className="cta button-inline my-4 my-md-5"
        >
          <img src={ig} alt="" style={{ paddingBottom: "2px" }} /> see our
          stories
        </a>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(HomeOurCompanies)
