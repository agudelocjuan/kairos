import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Email from "../global/email"

import img from "../../images/home/home-email-capture.png"

const HomeEmailCapture = ({ mobile }) => {
  return (
    <Container fluid id="homeEmailCapture" className={`bg-white`}>
      <Row className="">
        <Col xs="12" md="6" className="px-0">
          <img src={img} alt="" />
        </Col>
        <Col xs="12" md="6" className="bg-black px-0 pt-5">
          <div className="w-100 h-100 p-3 d-flex flex-column">
            <div className="cta-graffiti text-white">Stay in touch</div>
            <div className="text-white w-75 pt-5">
              It might feel scary, but we’re here to help. We’ve got the
              resources to help you adjust to this new normal. Reach out and ask
              us a question!
            </div>
            <Email />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(HomeEmailCapture)
