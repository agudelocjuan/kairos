import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"

import Img from "gatsby-image"

import groupChatLogo from "../../images/blog/groupChatLogo.svg"
import groupChat1 from "../../images/blog/groupChat1.jpg"
import groupChat2 from "../../images/blog/groupChat2.jpg"

import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__GroupChat = ({ mobile, data, count }) => {
  let options = {
    contain: true,
    draggable: true,
    initialIndex: 0,
    cellAlign: 'left',
    wrapAround: false,
    pageDots: false,
    // freeScroll: false,
    adaptiveHeight: true,
    // selectedAttraction: 0.2,
    // friction: 0.8,
    fade: true,
    groupCells: true,
    prevNextButtons: true,
  }

	let interviewList = data.map((interview, index) => {
    // console.log(interview.node)
    const {body, title, slug} = interview.node
    return (
      <Col key={index} md="4" className="post">
        <figure className="post__image">
          <Img fluid={interview.node.heroImage.fluid} />
        </figure>

        <div className="post__meta">
          <h3>{title}</h3>
          <p>
            {interview.node.description.description}
          </p>

          <Link to={`/blog/${slug}`} className="cta inline-text-link">
            Read More <img src={arrow} alt="" />
          </Link>
        </div>
      </Col> 
      
    ) 
  })

	return (
    <Container fluid id="blogIndex__GroupChat" className="blog-grid">
			<Row>
        <Col md="4" className="logo">
            <img src={groupChatLogo} alt="" />
        </Col>

        <Flickity options={options} className="blog-carousel interviews">
          {interviewList}
        </Flickity>  

        <div className="carousel__controls">
          <p class="carousel-status">{count}</p>
        </div>

			</Row>

      {/* <Row className="image-row">
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
      </Row> */}

    </Container>

  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__GroupChat)
