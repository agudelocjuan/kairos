import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"
import Img from "gatsby-image"

import brokeNoteLogo from "../../images/blog/brokeNoteLogo.svg"
import brokeNoteLogoMobile from "../../images/blog/brokeNoteLogo--mobile.svg"
import brokeNote1 from "../../images/blog/brokeNote1.jpg"
import brokeNote2 from "../../images/blog/brokeNote2.jpg"

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
    // selectedAttraction: 0.2,
    // friction: 0.8,
    fade: true,
    groupCells: true,
    prevNextButtons: true,
  }

  // matchHeight(){
  //   //Grab divs with the class name 'match-height'
  //   var getDivs = document.getElementsByClassName('match-height');
  
  //   //Find out how my divs there are with the class 'match-height' 
  //   var arrayLength = getDivs.length;
  //   var heights = [];
  
  //   //Create a loop that iterates through the getDivs variable and pushes the heights of the divs into an empty array
  //   for (var i = 0; i < arrayLength; i++) {
  //       heights.push(getDivs[i].offsetHeight);
  //   }
  
  //    //Find the largest of the divs
  //   function getHighest() {
  //     return Math.max(...heights);
  //   }
  
  //   //Set a variable equal to the tallest div
  //   var tallest = getHighest();
  
  //   //Iterate through getDivs and set all their height style equal to the tallest variable
  //   for (var i = 0; i < getDivs.length; i++) {
  //       getDivs[i].style.height = tallest + "px";
  //   }
  // }
  

  let blogList = data.map((blog, index) => {
    // console.log(blog.node)
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
  
  let blogListMobileOnce = data.map((blog, index) => {
    // console.log(blog.node)
    const {body, title, slug} = blog.node
    // console.log(blog.node.heroImage.fluid.src)
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

  let blogListMobile = data.map((blogList) => {
    // let result;
    let result = blogList;
    let i;
    for (i = 0; i < blogList.length; i += 3) result.push(blogList.slice(i, i + 3));
    return result;
  });
  
  let blogListArray = blogListMobile.map((blog, index) => {
    // let result;
    const {body, title, slug} = blog.node
    return (<div>
      {blogListMobile.map((blog, index) => (
          <article key={index} className="post">
            <Link to={`/blog/${blog.node.slug}`} className="">
      
              <figure className="post__image"
                style={{backgroundImage: `url(${blog.node.heroImage.fluid.src})`}}
                >
              </figure>
      
              <div className="post__meta">
                <h3>{blog.node.title}</h3>
                <p>
                  {blog.node.description.description}
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
  //   // carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
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
