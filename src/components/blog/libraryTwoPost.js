import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import arrow from "../../images/icons/arrow-diag-black.svg"
import arrowRightBlack from "../../images/icons/arrow-right-black.svg"
import arrowLeftBlack from "../../images/icons/arrow-left-black.svg"

class LibraryTwoPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselIndex: 0
    }
    // generic thing to with every function in a class component
    this.myCustomNext = this.myCustomNext.bind(this)
    this.myCustomPrev = this.myCustomPrev.bind(this)
  }

  function () {
      this.flkty.on('change', () => {
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
    console.log(this.flkty.selectedIndex)
    this.setState({carouselIndex: this.flkty.selectedIndex})
  }
  myCustomPrev = () => {
    // You can use Flickity API
    this.flkty.previous()
    // this.flktyMobile.previous()
    this.setState({carouselIndex: this.flkty.selectedIndex})

  }

  // this.setState({carouselIndex: this.flkty.selectedIndex})

  // componentDidMount = () => {
  //   // You can register events in componentDidMount hook
  //   this.flkty.on('settle', () => {
  //     console.log(`current index is ${this.flkty.selectedIndex}`)
      // this.setState({carouselIndex: this.flkty.selectedIndex})
  //   })
  // }

// const LibraryTwoPost = ({ posts, mobile }) => {
render() {

  console.log(this.state.carouselIndex)

  let {mobile, posts, count} = this.props

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
    prevNextButtons: false,
  }

  if (posts.length === 0) {
    return ""
  }

  let display = posts.map((i, idx) => {
    return (
      <Col key={idx} xs="12" md="12" className="post-wrapper">
        <div className="post-container">
          {/* <Link to={"/blog/" + i.node.slug}> */}
            {/* <div className="wrapper">
              <div
                className="container-image"
                style={
                  i.node.heroImage
                    ? {
                        backgroundImage: `url(${i.node.heroImage.fluid.src})`,
                      }
                    : {
                        backgroundColor: " #fdfc71",
                      }
                }
              />
            </div> */}

            <div className="post-text-container">
              <Link to={"/blog/" + i.node.slug}>

              {/* <div className="tag-container">
                {i.node.tags
                  ? i.node.tags.slice(0, 1).map((i, idx) => {
                      return (
                        <div key={idx} className="tag body-small">
                          {i}
                        </div>
                      )
                    })
                  : ""}

                <div className="publishDate body-small">
                  {i.node.publishDate}
                </div>
              </div> */}
              {mobile ? (
                <div className="cta-franklin post-title">{i.node.title}</div>
              ) : (
                <span className="cta-franklin post-title">{i.node.title}</span>
              )}
              
              <p className="post__excerpt" dangerouslySetInnerHTML={{
                __html: i.node.body.childMarkdownRemark.excerpt,
              }}>
              </p>
              <span className="cta inline-text-link">
                Read More <img src={arrow} alt="" />
              </span>
              
              </Link>
              {/* <span className="underline cta">Read More</span> */}
            </div>
          {/* </Link> */}
        </div>
      </Col>
    )
  })

  console.log(posts)


  let i
  let blogChunk = []

  for (i = 0; i < posts.length; i += 2) {
    blogChunk.push(posts.slice(i, i + 2));
  } 

  // let blogListMobile = posts.map((display) => {
  //   let result = display;
  //   let i;
  //   for (i = 0; i < display.length; i += 3) result.push(display.slice(i, i + 3));
  //   return result;
  // });


  let blogListArray = blogChunk.map((blog, index) => {

    return (<div className="group">
      {blog.map((article, index) => (
          <article key={index} className="post" onTouchStart={() => this._onTouchMobile()}>
            <Link to={`/blog/${article.node.slug}`} className="">
              <div className="post__meta">
                <h3 className="post__title">{article.node.title}</h3>
                {/* <p className="post__description">
                  {article.node.description.description}
                </p> */}
                <p className="post__excerpt" dangerouslySetInnerHTML={{
                __html: article.node.body.childMarkdownRemark.excerpt,
                }}>
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

  console.log(blogListArray)


  return (
    <Container fluid id="libraryTwoPost">
      <Row className="display-desktop">{display}</Row>
      <div className="display-mobile">
        <Flickity flickityRef={c => this.flkty = c} options={options} className="display-mobile">
          {blogListArray}
        </Flickity>

        <div className="carousel__controls">
            <div onClick={this.myCustomPrev} className="prev">
              <img src={arrowLeftBlack} />
            </div>
            <div className="carousel-status">
              <span className="current-slide">
                {this.state.carouselIndex + 1}&nbsp;/
              </span>
              <div className="total-slides">
                {/* <span className="display-desktop">
                  &nbsp;{count}
                </span> */}
                <span className="display-mobile">
                  &nbsp;{blogListArray.length}
                </span>
              </div>
            </div>
            <div onClick={this.myCustomNext} className="next">
              <img src={arrowRightBlack} />
            </div>
        </div>
      </div>
      
      {/* <Row className="display-mobile">{blogListArray}</Row> */}
    </Container>
  )
}
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryTwoPost)