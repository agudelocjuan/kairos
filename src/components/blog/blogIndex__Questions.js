import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import img_1 from "../../images/about/about_1.png"
import img_2 from "../../images/about/about_2.png"
import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__Questions = ({ mobile }) => {
  return (
    <Container fluid id="blogIndex__Questions" className="">
      <Row id="the-problem">
        <Col md="4" className="header">
          <div className="franklin-cta text-white">Any <br className="display-desktop" /> Questions? </div>
        </Col>
        <Col md="8" className="main">
          <h1 className="cta-graffiti text-white">
            Great, That's Why We're Here.
          </h1>
          <p className="text-white">
            We’re a team of entrepreneurs, activists, and creators dedicated to building a better future for our generation. Ask us anything. If we don’t know the answer, we’ll find someone who will.
          </p>
          <a className="big-button mt-9" href="mailto:team@kairoshq.com">
            Ask Us Anything
          </a>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__Questions)
