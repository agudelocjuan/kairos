import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"


import groupChatLogo from "../../images/blog/groupChatLogo.svg"
import groupChat1 from "../../images/blog/groupChat1.jpg"
import groupChat2 from "../../images/blog/groupChat2.jpg"

import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__GroupChat = ({ mobile }) => {
  return (
    <Container fluid id="blogIndex__GroupChat" className="blog-grid">
      <Row className="image-row">
        <Col md="4" className="logo">
            <img src={groupChatLogo} alt="" />
        </Col>
        <Col md="4" className="">
            <img src={groupChat1} alt="" />
        </Col>
        <Col md="4" className="">
            <img src={groupChat2} alt="" />
        </Col>
      </Row>
      
      <Row className="text-row">
        <Col md="4" className="">
            <h3>
                Your Credit Limit Could Have Just Dropped Without You Knowing…
            </h3>

            <Link to="#" className="cta inline-text-link">
                Watch <img src={arrow} alt="" />
            </Link>
        </Col>
        <Col md="4" className="">
            <h3>
                The bitter way to better finances.
            </h3>

            <p>
                Urna id volutpat libero viverra elementum. Nec nam cursus phasellus quam. Elit scelerisque egestas dignissim porta mauris nulla pharetra commodo. 
            </p>   


            <Link to="#" className="cta inline-text-link">
                Watch <img src={arrow} alt="" />
            </Link>
        </Col>
        <Col md="4" className="">
            <h3>
                The bitter way to better finances.
            </h3> 

            <p>
                Urna id volutpat libero viverra elementum. Nec nam cursus phasellus quam. Elit scelerisque egestas dignissim porta mauris nulla pharetra commodo. 
            </p>   


            <Link to="#" className="cta inline-text-link">
                Watch <img src={arrow} alt="" />
            </Link>
        </Col>
      </Row>

    </Container>

  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__GroupChat)
