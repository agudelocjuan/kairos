import React from "react"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"
import {CopyToClipboard} from 'react-copy-to-clipboard'

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
import Layout from "../global/layout"

class FaqTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.post = null
    this.json = null
    this.state = {
      metaPosition: "top",
    }
  }

  // for copy to clipboard button
  state = {
    value: '',
    copied: false,
  }

  render() {
    const footerColor = "salmon"
    const borderColor = "site-border-black"
    const { pageContext, data, location } = this.props
    const { postType } = pageContext
    const post = get(this.props, "data.contentfulFaq")

    // default color scheme
    let pageColor = "blue"

    // tag based color scheme
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

    // for social share buttons
    const shareItem = typeof window !== "undefined" ? window.location.href : ""

    const copyCodeToClipboard = () => {
      const el = this.textArea
      el.select()
      document.execCommand("copy")
    }

    return (
      <Layout
        location={location}
        path={location.pathname}
        borderColor={borderColor}
        footerColor={footerColor}
        pageColor={pageColor}
        pageType="article"
      >
        <SEO title={post?.title} />
        <section id="blogTemplate" className="faqTemplate">
          <Container fluid>

          <Row>
              <Col className="flush">
                <header className="post__header">
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
                         <textarea
                            ref={(textarea) => this.textArea = textarea}
                            className="urltext"
                            value={shareItem}
                          />
                          
                          <input value={shareItem} className="urltext" />
                          
                          <CopyToClipboard text={shareItem}
                            onCopy={() => this.setState({copied: true})}>
                            <img
                              src={linkIcon}
                              alt="link"
                              className="link-icon"
                              onClick={copyCodeToClipboard}
                            />
                          </CopyToClipboard>
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
                        </dd>
                        <dd>
                          {this.state.copied ? <span className="copy-message">URL Copied!</span> : null}
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
                  __html: post.sidebar.childMarkdownRemark.html.replace(/href/g, "target='_blank' href"), 
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
