import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import arrow from "../../images/icons/arrow-diag-black.svg"


const LibraryTwoPost = ({ posts, mobile }) => {
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
              
              <Link to={"/blog/" + i.node.slug} className="cta inline-text-link">
                Read More <img src={arrow} alt="" />
              </Link>
              {/* <span className="underline cta">Read More</span> */}
            </div>
          {/* </Link> */}
        </div>
      </Col>
    )
  })

  return (
    <Container fluid id="libraryTwoPost">
      <Row>{display}</Row>
    </Container>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryTwoPost)