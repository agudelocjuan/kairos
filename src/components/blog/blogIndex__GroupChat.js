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
      carouselIndex: 0, // carousel counters
    }
    this.myCustomNext = this.myCustomNext.bind(this)
    this.myCustomPrev = this.myCustomPrev.bind(this)
  }
  componentDidMount = () => {
    this.flkty.on("settle", () => {
      this.setState({ carouselIndex: this.flkty.selectedIndex })
    })
  }

  // flickity - change carousel counter of drag (for mobile)
  _onTouchMobile() {
    this.flkty.on("settle", () => {
      this.setState({
        carouselIndex: this.flkty.selectedIndex,
      })
      if (this.flkty.selectedIndex === 0) {
        this.setState({ initialInformation: true })
      } else {
        this.setState({
          carouselIndex: this.flkty.selectedIndex,
        })
      }
    })
  }

  // flickity - next/prev functions
  myCustomNext = () => {
    this.flkty.next()
    this.flktyMobile.next()
  }
  myCustomPrev = () => {
    this.flkty.previous()
    this.flktyMobile.previous()
  }

  render() {
    let { mobile, data, count } = this.props

    // flickity - desktop options
    let options = {
      contain: true,
      draggable: false,
      initialIndex: 0,
      cellAlign: "left",
      wrapAround: false,
      pageDots: false,
      adaptiveHeight: true,
      fade: true,
      groupCells: true,
      prevNextButtons: false,
    }

    // flickity - mobile options
    let optionsMobile = {
      contain: true,
      draggable: true,
      initialIndex: 0,
      cellAlign: "left",
      wrapAround: false,
      pageDots: false,
      adaptiveHeight: true,
      fade: true,
      groupCells: true,
      prevNextButtons: false,
    }

    let interviewList = data.map((interview, index) => {
      const { body, title, slug } = interview.node
      return (
        <article key={index} className="post">
          <Link to={`/blog/${slug}`} className="">
            <figure
              className="post__image"
              style={{
                backgroundImage: `url(${interview.node.heroImage.fluid.src})`,
              }}
            ></figure>

            <div className="post__meta">
              <h3>{title}</h3>
              <p>{interview.node.description.description}</p>

              <span className="cta inline-text-link">
                Read More <img src={arrow} alt="" />
              </span>
            </div>
          </Link>
        </article>
      )
    })

    // chunking posts in groups of 3 for mobile carousel

    let i
    let interviewChunk = []

    for (i = 0; i < data.length; i += 3) {
      interviewChunk.push(data.slice(i, i + 3))
    }

    let interviewListMobile = data.map(interviewList => {
      let result = interviewList
      let i
      for (i = 0; i < interviewList.length; i += 3)
        result.push(interviewList.slice(i, i + 3))
      return result
    })

    let interviewListArray = interviewChunk.map((interview, index) => {
      const interviewOne = interview[0]

      return (
        <div className="group" key={index}>
          {interview.map((article, index) => (
            <article
              key={index}
              className="post"
              onTouchStart={() => this._onTouchMobile()}
            >
              <Link to={`/blog/${article.node.slug}`} className="">
                <figure
                  className="post__image"
                  style={{
                    backgroundImage: `url(${article.node.heroImage.fluid.src})`,
                  }}
                ></figure>

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
        </div>
      )
    })

    // calculating counter data
    let countMobile = count / 3 + 1
    let countMobileWhole = Math.floor(countMobile)

    return (
      <Container fluid id="blogIndex__GroupChat" className="blog-grid">
        <Row>
          <Col lg="4" className="logo">
            <img src={groupChatLogo} alt="" className="logo--desktop" />
            <img src={groupChatLogoMobile} alt="" className="logo--mobile" />
          </Col>

          <Flickity
            flickityRef={c => (this.flkty = c)}
            options={options}
            className="blog-carousel interviews"
          >
            {interviewList}
          </Flickity>

          <Flickity
            flickityRef={c => (this.flktyMobile = c)}
            options={optionsMobile}
            className="blog-carousel--mobile interviews"
          >
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
                <span className="display-desktop">&nbsp;{count}</span>
                <span className="display-mobile">&nbsp;{countMobileWhole}</span>
              </div>
            </div>
            <div onClick={this.myCustomNext} className="next">
              <img src={arrowRight} />
            </div>
          </div>
        </Row>
      </Container>
    )
  }
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(blogIndex__GroupChat)
