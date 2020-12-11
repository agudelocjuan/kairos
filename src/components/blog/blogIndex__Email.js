import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Email from "../global/email--blog"

import img_1 from "../../images/about/about_1.png"
import img_2 from "../../images/about/about_2.png"
import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__Email = ({ mobile }) => {
  return (
    <Container fluid id="blogIndex__Email" className="">
      <Row id="">
        <Col md="4" className="left-container text">
            <h3 className="title">Want more Kairos?</h3>
            <p>Sign up for our newsletter today!</p>
            
        </Col>
        
        <Col md="8" className="left-container">
            <Email />
            
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__Email)
