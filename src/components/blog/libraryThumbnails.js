import React, {useState} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import arrow from "../../images/icons/arrow-diag-black.svg"

const LibraryThumbnails = ({ mobile, related = false, recent = false, type }) => {
  let data = useStaticQuery(graphql`
    query {
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
  `)
  
  let { edges } = data.allContentfulBlogPost
  let { edgesinterview } = data.allContentfulInterview
  let { edgesFaq } = data.allContentfulFaq

  let isBlog, isInterview, isFaq = false

  if ( type === "blog" ) {
    isBlog = true
  } else if ( type === "interview" ) {
    isInterview = true
  } else if ( type === "faq" ) {
    isFaq = true
  }

  let blogListInterview = data.allContentfulInterview.edges.map((blog, index) => {
    const {body, title, slug} = blog.node
    if ( blog.node.tags[0] === related.tags[0] && blog.node.title !== related.title ) {

      return (
        <article key={index} className="post">
            <Link to={`/blog/${blog.node.slug}`} className="">
              <div className="post__meta">
                <span className="tag cta">{blog.node.tags[0]}</span>
                <h3 className="post__title">{blog.node.title}</h3>
                <p className="post__description">
                  {blog.node.description.description}
                </p>
      
                <span className="cta inline-text-link">
                  Read More <img src={arrow} alt="" />
                </span>
              </div>
            </Link>
          </article> 
      ) 
    }
  })
  let blogListFaq = data.allContentfulFaq.edges.map((blog, index) => {
    const {body, title, slug} = blog.node
    if ( blog.node.tags[0] === related.tags[0] && blog.node.title !== related.title ) {

      return (
        <article key={index} className="post">
            <Link to={`/blog/${blog.node.slug}`} className="">
              <div className="post__meta">
                <span className="tag cta">{blog.node.tags[0]}</span>
                <h3 className="post__title">{blog.node.title}</h3>
                <p className="post__description" dangerouslySetInnerHTML={{
                __html: blog.node.body.childMarkdownRemark.excerpt,
                }}>
                </p>
      
                <span className="cta inline-text-link">
                  Read More <img src={arrow} alt="" />
                </span>
              </div>
            </Link>
          </article> 
      ) 
    }
  })


  let blogList = edges.map((blog, index) => {
    const {body, title, slug} = blog.node
    if ( blog.node.tags[0] === related.tags[0] && blog.node.title !== related.title ) {

      return (
        <article key={index} className="post">
            <Link to={`/blog/${blog.node.slug}`} className="">
              <div className="post__meta">
                <span className="tag cta">{blog.node.tags[0]}</span>
                <h3 className="post__title">{blog.node.title}</h3>
                <p className="post__description">
                  {blog.node.description.description}
                </p>
      
                <span className="cta inline-text-link">
                  Read More <img src={arrow} alt="" />
                </span>
              </div>
            </Link>
          </article> 
      ) 
    }
  })

  // determining article type to render correct related articles
  if ( type === "blog" ) {
    var filtered = blogList.filter(function (el) {
      return el != null;
    });
  } else if ( type === "interview" ) {
    var filtered = blogListInterview.filter(function (el) {
      return el != null;
    });
  } else if ( type === "faq" ) {
    var filtered = blogListFaq.filter(function (el) {
      return el != null;
    });
  }

  let isRelatedEmpty

  if ( filtered.length === 0 ) {
    isRelatedEmpty = true
  } else {
    isRelatedEmpty = false
  }

  return (

    <div id="related-wrapper">

    {isRelatedEmpty ? (
      ""
      ) 
      : (
      <Container fluid id="libraryThumbnails" className="flush">
        <h1 className="franklin-cta">Related Articles</h1>
        
        {isInterview ? (
          <Row>{blogListInterview}</Row>
        )
        : (
          ""
        )}
        {isFaq ? (
          <Row>{blogListFaq}</Row>
        )
        : (
          ""
        )}
        {isBlog ? (
          <Row>{blogList}</Row>
        )
        : (
          ""
        )}

      </Container>
    )}

      
    </div>
  )
  
  
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryThumbnails)