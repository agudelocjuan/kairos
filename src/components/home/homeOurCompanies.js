import React from "react"
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
          <h3>
            It's time we stopped waiting for someone else to step up and fix
            this
          </h3>
          <p>
            From the moment we hit adulthood, we're slammed with never-ending
            costs—working to break even from the time we step into the "real
            world." Our generation's had enough. We{"'"}re here to create change
            by dismantling tired structures and putting in the work to build new
            ones.
          </p>
          <p>Let's make it how it should be.</p>
          <Link to="/our-companies" className="cta inline-text-link">
            Learn More <img src={arrow} alt="" />
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
        <Col xs="6" md="3" className="pb-4 pb-md-0">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href=" https://www.instagram.com/p/CAi-lawD3xo/"
          >
            <img src={img_1} alt="" />
          </a>
        </Col>
        <Col xs="6" md="3" className="pb-4 pb-md-0">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/p/B-knrW3D37G/"
          >
            <img src={img_2} alt="" />
          </a>
        </Col>
        <Col xs="6" md="3" className="pb-4 pb-md-0">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/p/B-u6piPDtDj/"
          >
            <img src={img_3} alt="" />
          </a>
        </Col>
        <Col xs="6" md="3" className="pb-4 pb-md-0">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/p/CAJGqp_D-ib/"
          >
            {" "}
            <img src={img_4} alt="" />
          </a>
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
