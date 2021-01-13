import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import { connect } from "react-redux"

import SEO from "../components/global/seo"
import Layout from "../components/global/layoutBlog"

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
      filterTags: [],
      showFilterTags: true,
    }
    this._editFilterTags = this._editFilterTags.bind(this)
  }
  

  // match height plugin

  // external js: flickity.pkgd.js

// add this code

  

  _editFilterTags(tag) {
    if (this.state.filterTags.includes(tag)) {
      this.setState({
        filterTags: this.state.filterTags.filter(e => e !== tag),
      })
    } else {
      // this.setState({ filterTags: [] })
      // this.setState({ filterTags: this.state.filterTags.push(tag) })
      this.setState({ filterTags: this.state.filterTags.concat(tag) })
    }
    // if (this.state.filterTags.includes(tag)) {
    //   this.setState({
    //     filterTags: this.state.filterTags.filter(e => e !== tag),
    //   })
    // } else {
    //   this.setState({ filterTags: this.state.filterTags.concat(tag) })
    // }
  }
  render() {
    const pageColor = "yellow"
    const borderColor = "site-border-yellow"
    //// Import state
    const { filterTags, showFilterTags } = this.state
    const { pageContext, location } = this.props
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

    // tag state

    // const [tag, setTag] = useState(null);

    // const handleTag = (tag) => {
    //   setTag(tag);
    // };

    // this obj contains all the blog posts
    // console.log(blogPosts)
    // console.log(faqPosts)

    let blogCount = blogPosts.length
    let interviewCount = interviewPosts.length
    let faqCount = faqPosts.length

    let blogList = blogPosts.map((blog, index) => {
      return (
        <div key={index} className="col-3">
          {blog.node.heroImage}
          {blog.node.slug}
          {blog.node.title}
        </div>
      )
    })

    let interviewList = interviewPosts.map((interview, index) => {
      return (
        <div key={index} className="col-3">
          {interview.node.heroImage}
          {interview.node.slug}
          {interview.node.title}
        </div>
      )
    })

    let faqList = faqPosts.map((faq, index) => {
      return (
        <div key={index} className="col-3">
          {faq.node.slug}
          {faq.node.title}
        </div>
      )
    })

    //// Logic to match articles to filter tags
    let filteredPosts
    if (filterTags.length) {
      filteredPosts = faqPosts.filter(i => {
        let { tags } = i.node
        if (tags) {
          for (let i = 0; i < tags.length; i++) {
          // for (let i = 0; i < 2; i++) {
            // for (let j = 0; j < 2; j++) {
            for (let j = 0; j < filterTags.length; j++) {
              if (tags[i] === filterTags[j]) {
                return true
              }
            }
          }
          return false
        }
      })
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
      let active = filterTags.includes(i)
      return (
        <div
          key={idx}
          id={i}
          className={
            "position-relative tag body-small " + (active ? "active" : "")
          }
          onClick={
            () => this._editFilterTags(i)
            
            // activeTag = this.id
            // .post:not() - hide
          }
        >
          {i}
          {/* {active ? (
            <img
              src={exit}
              alt=""
              style={{
                position: "absolute",
                width: "15px",
                top: "-5px",
                right: "0px",
              }}
            />
          ) : (
            ""
          )} */}
        </div>
      )
    })

    // console.log(filteredPosts)

    //// Create Pagination Logic
    let slice_start = pageNumber * limit
    let slice_end = humanPageNumber * limit
    let pageArticles = faqPosts.slice(slice_start, slice_end)

    // let pagination =
    //   numberOfPages > 1 ? (
    //     <div className="pagination">
    //       <div className="eyebrow">PAGE</div>
    //       <div className="pages">
    //         <div className="page-back">
    //           {previousPagePath !== "" ? (
    //             <Link to={previousPagePath}>Previous</Link>
    //           ) : (
    //             <div className="disabled">Previous</div>
    //           )}
    //         </div>
    //         {[...Array(numberOfPages).keys()].map((i, idx) => {
    //           let current = i + 1
    //           let path = i === 0 ? "" : current
    //           return (
    //             <div
    //               key={idx}
    //               className={
    //                 "page-number " + (i === pageNumber ? "active" : "")
    //               }
    //             >
    //               <Link to={"/resources/library/" + path}>{current}</Link>
    //             </div>
    //           )
    //         })}
    //         <div className="page-next">
    //           {nextPagePath !== "" ? (
    //             <Link to={nextPagePath}>Next</Link>
    //           ) : (
    //             <div className="disabled">Next</div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     ""
    //   )

    console.log(pageArticles)

    //// Create unfiltered page view
    let unfiltered = (
      <>
        <LibraryTwoPost posts={pageArticles.slice(0, 3)} />
        <LibraryTwoPost posts={pageArticles.slice(3, 6)} />
        <LibraryTwoPost posts={pageArticles.slice(6, 9)} />
        <LibraryTwoPost posts={pageArticles.slice(9, 12)} />
        <LibraryTwoPost posts={pageArticles.slice(12, 15)} />
        
        <LibraryTwoPost posts={pageArticles.slice(15, 18)} />
        <LibraryTwoPost posts={pageArticles.slice(18, 21)} />
        <LibraryTwoPost posts={pageArticles.slice(21, 24)} />
        <LibraryTwoPost posts={pageArticles.slice(24, 27)} />
      </>
    )

    let filtered = <LibraryTwoPost posts={filteredPosts} />

    let pageRender = filterTags.length ? filtered : unfiltered

    // let pageRender = <div></div>

    return (
      <Layout
        location={location}
        location={location}
        path={location.pathname}
        borderColor={borderColor}
        footerColor={pageColor}
      >

      



        <SEO title="Blog" />
        {/* <div id="libraryPage">{pageRender}</div> */}

        {/* content goes here */}

        {/* <div style={{ color: `purple` }}>
          <h1>Hello Gatsby!</h1>
          <p>What a world.</p>
        </div> */}

        <BlogIndex__BrokeNote data={blogPosts} count={blogCount} />
        <BlogIndex__Email />
        <BlogIndex__GroupChat data={interviewPosts} count={interviewCount} />

        <section className="blogIndex__FAQ">
          <div className="display-mobile cta-graffiti">FAQs </div>
          <div className="faq__tags">
            {tagOptions}
          </div>

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
        

        {/* <BlogIndex__FAQ data={faqPosts} /> */}
        {/* <BlogIndex__FAQ posts={faqPosts} tags={availableTags} options={tagOptions} filtered={filteredPosts} /> */}

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
