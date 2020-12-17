import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Img from "gatsby-image"

import img_1 from "../../images/about/about_1.png"
import img_2 from "../../images/about/about_2.png"
import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__FAQ = ({ mobile, posts, tags, options, filtered }) => {
  console.log(filtered)
  let faqList = posts.map((faq, index) => {
    
    
    const {body, title, slug, tags} = faq.node

    // console.log(tags)

    // var result=""
    // let tagList = tags.forEach(i => {
    //         result=tags[i]+result;
    //     })

    

    return (
      <Col key={index} md="4" className="post" className={`${tags}`}>
        <figure className="post__image">
          {/* <Img fluid={faq.node.heroImage.fluid} /> */}
        </figure>

        <div className="post__meta">
          <h3>{title}</h3>
          <h4>{tags}</h4>

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
      <Row>
        <h1>
          FAQ Section
        </h1>
        <h2>
          Tags:
          <div className="faq__tags">
            { options }
          </div>
        </h2>
      </Row>
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
