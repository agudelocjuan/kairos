import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"

import Img from "gatsby-image"

import groupChatLogo from "../../images/blog/groupChatLogo.png"
import groupChatLogoMobile from "../../images/blog/groupChatLogo--mobile.png"

import arrow from "../../images/icons/arrow-diag-red.svg"
import arrowLeft from "../../images/icons/arrow-left.svg"
import arrowRight from "../../images/icons/arrow-right.svg"

class blogIndex__GroupChat extends React.Component {
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
    prevNextButtons: false,
  }

	let interviewList = data.map((interview, index) => {
    // console.log(interview.node)
    const {body, title, slug} = interview.node
    return (
      // <Col key={index} md="4" className="post">
      //   <figure className="post__image">
      //     <Img fluid={interview.node.heroImage.fluid} />
      //   </figure>

      //   <div className="post__meta">
      //     <h3>{title}</h3>
      //     <p>
      //       {interview.node.description.description}
      //     </p>

      //     <Link to={`/blog/${slug}`} className="cta inline-text-link">
      //       Read More <img src={arrow} alt="" />
      //     </Link>
      //   </div>
      // </Col> 

      <article key={index} className="post">
        <Link to={`/blog/${slug}`} className="">

        <figure className="post__image"
          style={{backgroundImage: `url(${interview.node.heroImage.fluid.src})`}}
          >
          {/* <Img fluid={interview.node.heroImage.fluid} /> */}
        </figure>

        <div className="post__meta">
          <h3>{title}</h3>
          <p>
            {interview.node.description.description}
          </p>

          <span className="cta inline-text-link">
            Read More <img src={arrow} alt="" />
          </span>
        </div>
        </Link>
      </article> 
      
    ) 
  })

  let i
  let interviewChunk = []

  for (i = 0; i < data.length; i += 3) {
    interviewChunk.push(data.slice(i, i + 3));
  } 
  console.log(interviewChunk)

  let interviewListMobile = data.map((interviewList) => {
    // let result;
    let result = interviewList;
    let i;
    for (i = 0; i < interviewList.length; i += 3) result.push(interviewList.slice(i, i + 3));
    return result;
  });

  let interviewListArray = interviewChunk.map((interview, index) => {
    // const {body, title, slug} = interview[0].node
    console.log(interview[0])
    console.log(interview[1])
    console.log(interview[2])

    const interviewOne = interview[0]

    return (<div className="group">
      {interview.map((article, index) => (
      // {interview[0].map((interview, index) => (
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

  let countMobile = count/3 + 1
  let countMobileWhole = Math.floor(countMobile)

  console.log(countMobileWhole)


	return (
    <Container fluid id="blogIndex__GroupChat" className="blog-grid">
			<Row>
        <Col lg="4" className="logo">
            <img src={groupChatLogo} alt="" className="logo--desktop" />
            <img src={groupChatLogoMobile} alt="" className="logo--mobile" />
        </Col>

        <Flickity flickityRef={c => this.flkty = c} options={options} className="blog-carousel interviews">
          {interviewList}
        </Flickity>  
        
        <Flickity flickityRef={c => this.flktyMobile = c} options={options} className="blog-carousel--mobile interviews">
          {interviewListArray}
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

        {/* <div className="carousel__controls">
          <p class="carousel-status">{count}</p>
        </div> */}

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
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__GroupChat)
