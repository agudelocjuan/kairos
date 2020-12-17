import React from "react"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Img from "gatsby-image"

import brokeNote1 from "../../images/blog/brokeNote1.jpg"
import brokeNote2 from "../../images/blog/brokeNote2.jpg"

import twitterIcon from "../../images/blog/twitter-icon.svg"
import linkIcon from "../../images/blog/link-icon.svg"

import BlogIndex__Email from "./blogIndex__Email"
import LibraryThumbnails from "./libraryThumbnails"

import SEO from "../global/seo"
import Layout from "../global/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import arrow from "../../images/icons/arrow-diag-red.svg"

class IntervewTemplate extends React.Component {
  render() {
    const pageColor = "blue"
    const footerColor = "salmon"
    // const pageColor = "salmon"
    const borderColor = "site-border-black"
    const { pageContext, data, location } = this.props
    const { postType } = pageContext
    const post = get(this.props, "data.contentfulInterview")

    // for twitter share button
    const shareItem = typeof window !== "undefined" ? window.location : ""

    // this is where all the post content is contained
    console.log(post)

    // twitter share button script
    // if (typeof window !== "undefined") {
    //   window.twttr = (function (d, s, id) {
    //     var js,
    //       fjs = d.getElementsByTagName(s)[0],
    //       t = window.twttr || {}
    //     if (d.getElementById(id)) return t
    //     js = d.createElement(s)
    //     js.id = id
    //     js.src = "https://platform.twitter.com/widgets.js"
    //     fjs.parentNode.insertBefore(js, fjs)

    //     t._e = []
    //     t.ready = function (f) {
    //       t._e.push(f)
    //     }

    //     return t
    //   })(document, "script", "twitter-wjs")
    // }

    return (
      <Layout
        location={location}
        path={location.pathname}
        borderColor={borderColor}
        footerColor={footerColor}
        pageColor={pageColor}
      >
        <SEO title={post?.title} />
        <section id="blogTemplate">
          <Container fluid>
            <Row>

            <Col className="flush">
                <header className="post__header">
                  <figure
                    className="post__header__image"
                    style={{
                      backgroundImage: `url(${post.heroImage.fluid.src})`,
                    }}
                  ></figure>

                  <aside className="post__header__title">
                    <span className="tag cta">{post.tags}</span>
                    {post ? (
                      <h1>{post.title}</h1>
                    ) : (
                      <h1> Default Blog Title</h1>
                    )}
                  </aside>

                  <aside className="post__header__meta">
                    <dl>
                      <span className="meta__item">
                        <dt>Author: </dt>
                        <dd> {post.author.name}</dd>
                      </span>

                      <span className="meta__item">
                        <dt>Date: </dt>
                        <dd> {post.publishDate}</dd>
                      </span>

                      <span className="meta__item">
                        <dt className="">Share: </dt>
                        <dd className="link">
                          <a
                            href={shareItem}
                            target="_blank"
                            rel="norefferer noopener"
                          > 
                            <img
                              src={linkIcon}
                              alt="link"
                              className="link-icon"
                              
                            />
                          </a>
                        </dd>
                        <dd className="twitter-wrapper">
                        <a
                            href={
                              "https://twitter.com/intent/tweet?text=" + shareItem
                            }
                            target="_blank"
                            rel="norefferer noopener"
                          > 
                            <img
                              src={twitterIcon}
                              alt="twitter"
                              className="twitter-icon"
                            />
                          </a>
                          {/* <a
                            class="inline-text-link twitter-share-button"
                            // class="twitter-share-button"
                            href="https://twitter.com/intent/tweet"
                            // text={post.title}
                            via="kairoshq"
                            url=""
                            target="_blank"
                            data-size="large"
                            data-url="{post.slug}"
                            data-via="kairoshq"
                            data-text="{post.title}"
                          >
                            Tweet
                          </a> */}
                        </dd>
                      </span>
                    </dl>
                  </aside>
                </header>
              </Col>
            </Row>

            <Row>
              <Col className="flush">
                <main className="post__body" dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}>
                </main>
              </Col>
            </Row>

            <Row>
              <Col className="flush">
                <BlogIndex__Email />
              </Col>
            </Row>

            {/* <Row>
              <Col className="flush">
                <div className="mb-4 related-container">
                  <h1 className="mb-4 related-article-title">
                    Related Articles
                  </h1>
                  
                </div>
              </Col>
            </Row> */}


          </Container>
        </section>
      </Layout>
    )
  }
}

export default IntervewTemplate

export const pageQuery = graphql`
  query InterviewBySlug($slug: String!) {
    contentfulInterview(slug: { eq: $slug }) {
      title
      tags
      body {
        body
        childMarkdownRemark {
          html
          excerpt
          timeToRead
          wordCount {
            words
          }
        }
      }
      author {
        name
      }
      description {
        description
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1440, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
