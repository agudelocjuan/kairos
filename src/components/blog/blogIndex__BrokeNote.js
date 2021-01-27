import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"
import Img from "gatsby-image"

import brokeNoteLogo from "../../images/blog/brokeNoteLogo.svg"
import brokeNoteLogoMobile from "../../images/blog/brokeNoteLogo--mobile.svg"

import arrow from "../../images/icons/arrow-diag-red.svg"
import arrowLeft from "../../images/icons/arrow-left.svg"
import arrowRight from "../../images/icons/arrow-right.svg"

class blogIndex__BrokeNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselIndex: 0
    }
    // generic thing to with every function in a class component
    this.myCustomNext = this.myCustomNext.bind(this)
    this.myCustomPrev = this.myCustomPrev.bind(this)
  }
  componentDidMount = () => {
    // You can register events in componentDidMount hook
    this.flkty.on('settle', () => {
      console.log(`current index is ${this.flkty.selectedIndex}`)
      this.setState({carouselIndex: this.flkty.selectedIndex})
    })
  }

  _onTouchMobile() {
    this.flkty.on("settle", () => {
      // this.props.dispatch(setShowInfoPopup(false))
      this.setState({
        // carouselIndex: this.flkty.selectedIndex + 1,
        carouselIndex: this.flkty.selectedIndex,
      })
      if (this.flkty.selectedIndex === 0) {
        this.setState({ initialInformation: true })
      } else {
        this.setState({
          // carouselIndex: this.flkty.selectedIndex - 1,
          carouselIndex: this.flkty.selectedIndex,
          // initialInformation: false,
        })
      }
    })
  }

  myCustomNext = () => {
    // You can use Flickity API
    this.flkty.next()
    this.flktyMobile.next()
  }
  myCustomPrev = () => {
    // You can use Flickity API
    this.flkty.previous()
    this.flktyMobile.previous()
  }
  render() {
    let {mobile, data, count} = this.props
    let options = {
      contain: true,
      draggable: false,
      initialIndex: 0,
      cellAlign: 'left',
      wrapAround: false,
      pageDots: false,
      freeScroll: false,
      adaptiveHeight: true,
      fade: true,
      // groupCells: true,
      groupCells: false,
      prevNextButtons: false,
    }
    
    let optionsMobile = {
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
      prevNextButtons: false,
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
            <article key={index} className="post" onTouchStart={() => this._onTouchMobile()}>
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


    let countMobile = count/3 + 1
    let countMobileWhole = Math.floor(countMobile)

    console.log(countMobileWhole)

  
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
  
          <Flickity flickityRef={c => this.flkty = c} options={options} className="blog-carousel blog">
            {blogList}
          </Flickity>
          
          <Flickity flickityRef={c => this.flktyMobile = c} options={optionsMobile} className="blog-carousel--mobile blog">
            {blogListArray}
          </Flickity>

          <div className="carousel__controls">
            <div onClick={this.myCustomPrev} className="prev">
              <img src={arrowLeft} />
            </div>
            <div className="carousel-status">
              <span className="current-slide">
                {this.state.carouselIndex + 1}&nbsp;/
              </span>
              <div className="total-slides">
                <span className="display-desktop">
                  &nbsp;{count}
                </span>
                <span className="display-mobile">
                  &nbsp;{countMobileWhole}
                </span>
              </div>
            </div>
            <div onClick={this.myCustomNext} className="next">
              <img src={arrowRight} />
            </div>
          </div>
          
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
}


export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__BrokeNote)
