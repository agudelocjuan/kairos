import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Img from "gatsby-image"

import img_1 from "../../images/about/about_1.png"
import img_2 from "../../images/about/about_2.png"
import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__FAQ = ({ mobile, data }) => {
  let faqList = data.map((faq, index) => {
    console.log(faq.node)
    const {body, title, slug} = faq.node
    return (
      <Col key={index} md="4" className="post">
        <figure className="post__image">
          <Img fluid={faq.node.heroImage.fluid} />
        </figure>

        <div className="post__meta">
          <h3>{title}</h3>
          <p>
            {body.body}
          </p>

          <Link to={`/blog/${slug}`} className="cta inline-text-link">
            Read More <img src={arrow} alt="" />
          </Link>
        </div>
      </Col> 
      
    ) 
  })
  return (
    <Container fluid id="blogIndex__FAQ" className={`bg-white`}>
      <Row id="">
        {faqList}
      
      </Row>
      
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__FAQ)
