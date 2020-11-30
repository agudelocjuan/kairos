import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import img_1 from "../../images/about/about_1.png"
import img_2 from "../../images/about/about_2.png"
import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__Email = ({ mobile }) => {
  return (
    <Container fluid id="blogIndex__Email" className={`bg-white`}>
      <Row id="">
        <Col md={{ size: 6, offset: 1 }} className="left-container">
            <h1>Email Capture</h1>
            
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__Email)
