import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"

import SEO from "../components/global/seo"
import Layout from "../components/global/layout"

import { setMenu } from "../state/global"

import BlogIndex__BrokeNote from "../components/blog/blogIndex__BrokeNote"
import BlogIndex__Email from "../components/blog/blogIndex__Email"
import BlogIndex__GroupChat from "../components/blog/blogIndex__GroupChat"
import BlogIndex__FAQ from "../components/blog/blogIndex__FAQ"
import BlogIndex__Questions from "../components/blog/blogIndex__Questions"

import LibraryTwoPost from "../components/blog/libraryTwoPost"

import exit from "../images/icons/exit-menu.svg"
import arrowRight from "../images/icons/arrow-right.svg"
import arrowLeft from "../images/icons/arrow-left.svg"
import arrowRightBlack from "../images/icons/arrow-right-black.svg"
import arrowLeftBlack from "../images/icons/arrow-left-black.svg"
import arrowBlack from "../images/icons/arrow-diag-black.svg"

import logo from "../images/logos/kairos-logo.svg"
import cross from "../images/icons/cross.svg"
import searchIcon from "../images/icons/search.svg"
import bellIcon from "../images/icons/bell.svg"
import menu_close from "../images/icons/menu-close.svg"
import menu_open from "../images/icons/menu-open.svg"
import arrow from "../images/icons/arrow-diag-red.svg"

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: null,
      filterTags: [],
      showFilterTags: true,
      carouselIndex: 0, // carousel counter
    }
    // binding functions
    this._editFilterTags = this._editFilterTags.bind(this)
    this.myCustomNext = this.myCustomNext.bind(this)
    this.myCustomPrev = this.myCustomPrev.bind(this)
  }

  // function to change carousel counters
  componentDidMount = () => {
    this.flktyMobile.on("settle", () => {
      this.setState({ carouselIndex: this.flktyMobile.selectedIndex })
    })
  }

  // flickity - next/previous functions
  myCustomNext = () => {
    this.flktyMobile.next()
  }
  myCustomPrev = () => {
    this.flktyMobile.previous()
  }

  // flickity - carousel counter logic on mobile dragging

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

  // tag selection logic for FAQ index
  _editFilterTags(tag) {
    if (this.state.tag === tag) {
      this.setState({ tag: null })
    } else {
      this.setState({ tag: tag })
    }
  }

  render() {
    const pageColor = "yellow"
    const borderColor = "site-border-yellow"
    //// Import state
    const { filterTags, showFilterTags } = this.state
    const { pageContext, location } = this.props
    const { count } = this.props
    const {
      humanPageNumber,
      pageNumber,
      limit,
      numberOfPages,
      nextPagePath,
      previousPagePath,
    } = pageContext

    //// Organize content from graphql & filtered data
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const blogPosts = get(this, "props.data.allContentfulBlogPost.edges")
    const interviewPosts = get(this, "props.data.allContentfulInterview.edges")
    const faqPosts = get(this, "props.data.allContentfulFaq.edges")

    // tag based color scheme
    const colorLookup = {
      money: "is-blue",
      health: "is-purple",
      home: "is-cream",
      work: "is-pale-yellow",
      news: "is-pale-red",
    }

    const style = colorLookup[this.state.tag]

    let blogCount = blogPosts.length
    let interviewCount = interviewPosts.length
    let faqCount = faqPosts.length

    //// Logic to match articles to filter tags
    let filteredPosts

    if (this.state.tag) {
      filteredPosts = faqPosts.filter(i => i.node.tags[0] === this.state.tag)
    }

    //// Create list of available tags from the CMS
    let availableTags = []
    faqPosts.forEach(i => {
      // blogPosts.forEach(i => {
      if (i.node.tags) {
        i.node.tags.forEach(t => {
          availableTags.push(t)
        })
      }
    })
    availableTags = [...new Set(availableTags)]

    // Create render for list of tags
    let tagOptions = availableTags.map((i, idx) => {
      let active = i === this.state.tag
      return (
        <div
          key={idx}
          id={i}
          ref={i}
          className={
            "position-relative tag body-small " + (active ? "active" : "")
          }
          onClick={() => this._editFilterTags(i)}
        >
          {i}
        </div>
      )
    })

    //// slicing FAQ posts
    let slice_start = pageNumber * limit
    let slice_end = humanPageNumber * limit
    let pageArticles = faqPosts.slice(slice_start, slice_end)

    //// Create unfiltered page view
    // add unfilteredMobile with a map as same as the main map in libraryTwoPost

    let i
    let blogChunk = []

    // grouping blog array into chunks of 3 for mobile
    for (i = 0; i < pageArticles.length; i += 2) {
      blogChunk.push(pageArticles.slice(i, i + 2))
    }

    let unfilteredMobile = blogChunk.map((blog, index) => {
      return (
        <div className="group" key={index}>
          {blog.map((article, index) => (
            <article
              key={index}
              className="post"
              onTouchStart={() => this._onTouchMobile()}
            >
              <Link to={`/blog/${article.node.slug}`} className="">
                <div className="post__meta">
                  <h3 className="post__title">{article.node.title}</h3>
                  <p
                    className="post__excerpt"
                    dangerouslySetInnerHTML={{
                      __html: article.node.body.childMarkdownRemark.excerpt,
                    }}
                  ></p>

                  <span className="cta inline-text-link">
                    Read More <img src={arrowBlack} alt="" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )
    })

    let carouselLength = unfilteredMobile.length

    // flickity options
    let options = {
      contain: true,
      draggable: true,
      initialIndex: 0,
      cellAlign: "left",
      wrapAround: false,
      pageDots: false,
      freeScroll: false,
      adaptiveHeight: true,
      fade: true,
      // groupCells: true,
      groupCells: false,
      prevNextButtons: false,
    }

    // unfiltered FAQ posts

    let unfiltered = (
      <div className="faqIndex">
        <div className="display-desktop">
          <LibraryTwoPost posts={pageArticles.slice(0, 3)} />
          <LibraryTwoPost posts={pageArticles.slice(3, 6)} />
          <LibraryTwoPost posts={pageArticles.slice(6, 9)} />
          <LibraryTwoPost posts={pageArticles.slice(9, 12)} />
          <LibraryTwoPost posts={pageArticles.slice(12, 15)} />
          <LibraryTwoPost posts={pageArticles.slice(15, 18)} />
          <LibraryTwoPost posts={pageArticles.slice(18, 21)} />
          <LibraryTwoPost posts={pageArticles.slice(21, 24)} />
          <LibraryTwoPost posts={pageArticles.slice(24, 27)} />
        </div>

        <Flickity
          flickityRef={c => (this.flktyMobile = c)}
          options={options}
          className="display-mobile"
        >
          {unfilteredMobile}
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
              <span className="display-mobile">&nbsp;{carouselLength}</span>
            </div>
          </div>
          <div onClick={this.myCustomNext} className="next">
            <img src={arrowRightBlack} />
          </div>
        </div>
      </div>
    )

    // filtered FAQ posts
    // libraryTwoPost — component to display each filtered post
    let filtered = <LibraryTwoPost posts={filteredPosts} />

    // choosing filtered vs unfiltered based on tag selection
    let pageRender = this.state.tag ? filtered : unfiltered

    return (
      <Layout
        location={location}
        location={location}
        path={location.pathname}
        borderColor={borderColor}
        footerColor={pageColor}
        pageType="blog"
      >
        <SEO title="Blog" />

        <BlogIndex__BrokeNote data={blogPosts} count={blogCount} />
        <BlogIndex__Email />
        <BlogIndex__GroupChat data={interviewPosts} count={interviewCount} />

        <section className={`blogIndex__FAQ ${style}`}>
          <div className="display-mobile cta-graffiti">FAQS</div>
          <div className="faq__tags">{tagOptions}</div>

          <Container fluid id="" className="faq__main">
            <Row id="">
              <Col md="4" className="faq__header display-desktop">
                <div className="cta-graffiti">FAQs </div>
              </Col>
              <Col md="8" className="faq__content">
                {pageRender}
              </Col>
            </Row>
          </Container>
        </section>

        <BlogIndex__Questions />
      </Layout>
    )
  }
}

export default BlogIndex

export const IndexBlogQuery = graphql`
  query IndexBlogQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          body {
            body
          }
          description {
            description
          }
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            file {
              url
              fileName
            }
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulInterview(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          publishDate(formatString: "MMMM Do, YYYY")
          slug
          body {
            body
          }
          description {
            description
          }
          title
          author {
            name
          }
          tags
          heroImage {
            file {
              url
              fileName
            }
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulFaq(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          publishDate(formatString: "MMMM Do, YYYY")
          slug
          tags
          body {
            body
            childMarkdownRemark {
              excerpt
            }
          }
          sidebar {
            sidebar
            childMarkdownRemark {
              html
              excerpt
              timeToRead
              wordCount {
                words
              }
            }
          }
          description {
            description
          }
          title
          author {
            name
          }
        }
      }
    }
  }
`
