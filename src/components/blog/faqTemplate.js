import React from "react"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import brokeNote1 from "../../images/blog/brokeNote1.jpg"
import brokeNote2 from "../../images/blog/brokeNote2.jpg"

import arrowBelow from "../../images/icons/arrow-below.svg"
import twitterIcon from "../../images/blog/twitter-icon.svg"
import linkIcon from "../../images/blog/link-icon.svg"

import BlogIndex__Email from "./blogIndex__Email"
import LibraryThumbnails from "./libraryThumbnails"

import { graphql, Link, useStaticQuery } from "gatsby"

import arrow from "../../images/icons/arrow-diag-red.svg"

import SEO from "../global/seo"
import Layout from "../global/layoutArticle"

class FaqTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.post = null
    this.json = null
    this.state = {
      metaPosition: "top",
    }
    // this._handleScroll = this._handleScroll.bind(this)
  }

  render() {
    // const pageColor = "cream"
    const footerColor = "salmon"
    // const pageColor = "salmon"
    const borderColor = "site-border-black"
    const { pageContext, data, location } = this.props
    const { postType } = pageContext
    const post = get(this.props, "data.contentfulFaq")

    let pageColor = "blue"

    if ( post.tags[0] === "money" ) {
      pageColor = "blue"
    } else if ( post.tags[0] === "health" ) {
      pageColor = "purple"
    } else if ( post.tags[0] === "home" ) {
      pageColor = "cream"
    } else if ( post.tags[0] === "work" ) {
      pageColor = "pale-yellow"
    } else if ( post.tags[0] === "news" ) {
      pageColor = "pale-red"
    }

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
        <section id="blogTemplate" className="faqTemplate">
          <Container fluid>

          <Row>
              <Col className="flush">
                <header className="post__header">
                  {/* <figure
                    className="post__header__image"
                    style={{
                      backgroundImage: `url(${post.heroImage.fluid.src})`,
                    }}
                  ></figure> */}

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
                        <dd> {post.author.name} </dd>
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
              
            { post.sidebar &&
              <Col className="post__sidebar flush" md="4">
                <header className="post__sidebar__header">
                    Learn More 
                    <img src={arrowBelow} alt="see below" />
                </header>
                <div className="post__sidebar__inner" dangerouslySetInnerHTML={{
                  __html: post.sidebar.childMarkdownRemark.html,
                }}>

                </div>
              </Col>
            }

              

              <Col className="post__body flush" md="8">
                  <div className="post__body__inner" dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}>

                  </div>
                  <div className="faq__footer display-desktop">
                    <p className="text">Still have questions?</p>
                    <a href="mailto:team@kairoshq.com">Ask Us Here</a>
                  </div>
              </Col>
                
            </Row>

            <div className="faq__footer display-mobile">
              <p className="text">Still have questions?</p>
              <a href="mailto:team@kairoshq.com">Ask Us Here</a>
            </div>

            {/* <Row>
              <Col className="flush">
                <BlogIndex__Email />
              </Col>
            </Row> */}

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

          <Container fluid>
            <Row>
              <Col className="flush">
                  <div className="related">    
                    <LibraryThumbnails related={post} type="faq" />
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default FaqTemplate

export const pageQuery = graphql`
  query FaqBySlug($slug: String!) {
    contentfulFaq(slug: { eq: $slug }) {
      title
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
      tags
      author {
        name
      }
      description {
        description
      }
      publishDate(formatString: "MMMM Do, YYYY")
    }
  }
`
