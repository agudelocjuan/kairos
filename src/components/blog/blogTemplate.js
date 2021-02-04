import React from "react"
import ReactDOM from "react-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Img from "gatsby-image"

import twitterIcon from "../../images/blog/twitter-icon.svg"
import linkIcon from "../../images/blog/link-icon.svg"

import BlogIndex__Email from "./blogIndex__Email"
import LibraryThumbnails from "./libraryThumbnails"

import SEO from "../global/seo"
import Layout from "../global/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import arrow from "../../images/icons/arrow-diag-red.svg"

class BlogTemplate extends React.Component {
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
    const post = get(this.props, "data.contentfulBlogPost")

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
    const shareItem = typeof window !== `undefined` ? window.location.href : ""

    const copyCodeToClipboard = () => {
      const el = this.textArea
      el.select()
      document.execCommand("copy")
    }

    const blogPosts = get(this, "props.data.allContentfulBlogPost.edges")

    // related articles logic
    let relatedPosts = blogPosts.map((blog, index) => {
      if ( blog.node.tags[0] === post.tags[0] ) {
        const {body, title, slug} = blog.node
        return (
          <article key={index} className="post">
          <Link to={`/blog/${slug}`} className="">
    
            <figure className="post__image"
              style={{backgroundImage: `url(${blog.node.heroImage.fluid.src})`}}
            >
            </figure>
    
            <div className="post__meta">
              <h3>{title}</h3>
              <p>
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
        else return ""
      
    })

    let postKind = "blog" // article type which informs related articles

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
                      <h1>Default Blog Title</h1>
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
                        <dt className="share-text">Share: </dt>
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
              <Col className="flush">
                <main className="post__body" dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}>
                </main>
              </Col>
            </Row>

            <Row>
              <Col className="flush">
                  <div className="related">
                    {/* related posts */}
                    <LibraryThumbnails related={post} type={postKind} />
                  </div>
              </Col>
            </Row>

            <Row>
              <Col className="flush">
                <BlogIndex__Email />
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
      tags
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
  }
`
