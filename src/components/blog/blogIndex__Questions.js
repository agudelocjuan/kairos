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
          <div className="franklin-cta text-white">Any Questions? </div>
        </Col>
        <Col md="8" className="main">
          <h1 className="cta-graffiti text-white">
            Great, That's Why We're Here.
          </h1>
          <p className="text-white">
            Nam id at diam faucibus nisi, massa nec viverra neque. Malesuada
            egestas mauris aliquet turpis semper blandit diam. Et eu, non
            commodo elementum diam magna senectus. Tortor, lectus enim luctus
            facilisi viverra volutpat aliquam. Auctor fames odio sed volutpat
            lectus. Iaculis sed vel nec aliquet sit varius.
          </p>
          <a className="big-button mt-9" href="#">
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
