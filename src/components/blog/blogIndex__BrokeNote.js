import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"
import Img from "gatsby-image"

import brokeNoteLogo from "../../images/blog/brokeNoteLogo.svg"
import brokeNoteLogoMobile from "../../images/blog/brokeNoteLogo--mobile.svg"

import arrow from "../../images/icons/arrow-diag-red.svg"

const blogIndex__BrokeNote = ({ mobile, data, count }) => {
  let options = {
    contain: true,
    draggable: true,
    initialIndex: 0,
    cellAlign: 'left',
    wrapAround: false,
    pageDots: false,
    freeScroll: false,
    adaptiveHeight: true,
    fade: true,
    // groupCells: true,
    groupCells: false,
    prevNextButtons: true,
  }
 
  let blogList = data.map((blog, index) => {
    const {body, title, slug} = blog.node
    return (
      <article key={index} className="post">
      <Link to={`/blog/${slug}`} className="">

        <figure className="post__image"
          style={{backgroundImage: `url(${blog.node.heroImage.fluid.src})`}}
          >
        </figure>

        <div className="post__meta">
          <h3>{title}</h3>
          <p>
            {blog.node.description.description}
          </p>

          <span className="cta inline-text-link">
            Read More <img src={arrow} alt="" />
          </span>
        </div>
      </Link>

      </article> 
    ) 
  })
  
  console.log(data)

  let i
  let blogChunk = []

  for (i = 0; i < data.length; i += 3) {
    blogChunk.push(data.slice(i, i + 3));
  } 

  // let blogListMobile = data.map((blogList) => {
  //   let result = blogList;
  //   let i;
  //   for (i = 0; i < blogList.length; i += 3) result.push(blogList.slice(i, i + 3));
  //   return result;
  // });

  let blogListArray = blogChunk.map((blog, index) => {

    return (<div className="group">
      {blog.map((article, index) => (
          <article key={index} className="post">
            <Link to={`/blog/${article.node.slug}`} className="">
              <figure className="post__image"
                style={{backgroundImage: `url(${article.node.heroImage.fluid.src})`}}
                >
              </figure>
      
              <div className="post__meta">
                <h3 className="post__title">{article.node.title}</h3>
                <p className="post__description">
                  {article.node.description.description}
                </p>
      
                <span className="cta inline-text-link">
                  Read More <img src={arrow} alt="" />
                </span>
              </div>
            </Link>
          </article> 
      ))}
      </div>);
  });




  let counter;

  console.log(blogList)
  console.log(blogListArray)

  // external js: flickity.pkgd.js

  // var flkty = new Flickity('.blog-carousel');
  // var carouselStatus = document.querySelector('.carousel-status');

  // function updateStatus() {
  //   var slideNumber = flkty.selectedIndex + 1;
  //   carouselStatus.textContent = slideNumber + '/';
  // }
  // updateStatus();

  // flkty.on( 'select', updateStatus );

  return (
    <Container fluid id="blogIndex__BrokeNote" className="blog-grid">
      <Row>
        <Col lg="4" className="logo">
          <img src={brokeNoteLogo} alt="" className="logo--desktop" />
          <img src={brokeNoteLogoMobile} alt="" className="logo--mobile" id="brokeNote__logo" />
        </Col>

        {/* if need equal height cells https://codepen.io/desandro/pen/ZYvemV */}

        <Flickity options={options} className="blog-carousel blog">
          {blogList}
        </Flickity>
        
        <Flickity options={options} className="blog-carousel--mobile blog">
          {blogListArray}
        </Flickity>

        {/* <div className="carousel__controls">
          <p className="carousel-status">
            {count/3 + 1}
          </p>
        </div> */}
        
      </Row>
      {/* <Row className="image-row">
        <Col md="4" className="logo">
          <img src={brokeNoteLogo} alt="" />
        </Col>
        <Col md="4" className="">
          <img src={brokeNote1} alt="" />
        </Col>
        <Col md="4" className="">
          <img src={brokeNote2} alt="" />
        </Col>
      </Row>

      <Row className="text-row">
        <Col md="4" className="">
          <h3>
            Your Credit Limit Could Have Just Dropped Without You Knowing…
          </h3>

          <Link to="#" className="cta inline-text-link">
            Read More <img src={arrow} alt="" />
          </Link>
        </Col>
        <Col md="4" className="">
          <h3>The bitter way to better finances.</h3>

          <p>
            Urna id volutpat libero viverra elementum. Nec nam cursus phasellus
            quam. Elit scelerisque egestas dignissim porta mauris nulla pharetra
            commodo.
          </p>

          <Link to="#" className="cta inline-text-link">
            Read More <img src={arrow} alt="" />
          </Link>
        </Col>
        <Col md="4" className="">
          <h3>The bitter way to better finances.</h3>

          <p>
            Urna id volutpat libero viverra elementum. Nec nam cursus phasellus
            quam. Elit scelerisque egestas dignissim porta mauris nulla pharetra
            commodo.
          </p>

          <Link to="#" className="cta inline-text-link">
            Read More <img src={arrow} alt="" />
          </Link>
        </Col>
      </Row> */}
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__BrokeNote)
