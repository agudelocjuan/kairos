import React from "react"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Img from "gatsby-image"

import brokeNote1 from "../../images/blog/brokeNote1.jpg"
import brokeNote2 from "../../images/blog/brokeNote2.jpg"

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
    // this._handleScroll = this._handleScroll.bind(this)
  }

  render() {
    const pageColor = "salmon"
    const borderColor = "site-border-black"
    const { pageContext, data, location } = this.props
    const { postType } = pageContext
    const post = get(this.props, "data.contentfulBlogPost")

    // this is where all the post content is contained
    console.log(post)

    // twitter share button script
    if (typeof window !== "undefined") {
      window.twttr = (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {}
        if (d.getElementById(id)) return t
        js = d.createElement(s)
        js.id = id
        js.src = "https://platform.twitter.com/widgets.js"
        fjs.parentNode.insertBefore(js, fjs)

        t._e = []
        t.ready = function (f) {
          t._e.push(f)
        }

        return t
      })(document, "script", "twitter-wjs")
    }

    // rich text rendering

    // this.post = postType === "library" ? libraryPost : glossaryPost
    // this.post = postType === "library" ? libraryPost : glossaryPost

    // this.json = this.post.childContentfulBlogPostRichTextNode.json

    // if (
    //   postType === "library" &&
    //   this.post.childContentfulLibraryArticleRichTextNode
    // ) {
    // } else if (
    //   postType === "glossary" &&
    //   this.post.childContentfulGlossaryArticleRichTextNode
    // ) {
    //   this.json = this.post.childContentfulGlossaryArticleRichTextNode.json
    // }

    // if (this.json.content) {
    //   this.json.content.forEach(i => {
    //     if (i.nodeType === "embedded-asset-block") {
    //       this.setState({
    //         [i.data.target.sys.id]: false,
    //       })
    //     }
    //   })
    // }

    // const options = {
    //   renderNode: {
    //     [BLOCKS.EMBEDDED_ASSET]: node => {
    //       if (node.data.target.fields) {
    //         console.log(node.data.target.fields)

    //         return ''
    //       }
    //     },
    //     [INLINES.ENTRY_HYPERLINK]: node => {

    //     },
    //   },
    // }

    // let article = documentToReactComponents(json, options)

    return (
      <Layout
        location={location}
        path={location.pathname}
        borderColor={borderColor}
        footerColor={pageColor}
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
                        <dt>Share: </dt>
                        <dd className="link">
                          <a href="#">Link</a>
                        </dd>
                        <dd>
                          <a
                            class="twitter-share-button"
                            href="https://twitter.com/intent/tweet"
                            text={post.title}
                            via="kairoshq"
                            url=""
                            target="_blank"
                            data-size="large"
                          >
                            Tweet
                          </a>
                        </dd>
                      </span>
                    </dl>
                  </aside>
                </header>
              </Col>
            </Row>

            <Row>
              <Col className="flush">
                <main className="post__body">
                  {/* {post.body.body} */}

                  <p>
                    The <strong>50-3-0-20</strong> 50-30-20 rule is a{" "}
                    <em>pretty well known</em> <u>underline text</u> budgeting
                    framework developed by Elizabeth Warren (yeah, aka
                    presidential candidate Lizzy Warren!) in her 2006
                    bestseller, All Your Worth. This rule of thumb has stuck
                    around for more than a decade because it’s simple. The
                    50-30-20 rule is a pretty well known budgeting framework
                    developed by Elizabeth Warren (yeah, aka presidential
                    candidate Lizzy Warren!) in her 2006 bestseller, All Your
                    Worth. This rule of thumb has...
                  </p>

                  <img src={brokeNote1} />

                  <h3>Subheading</h3>

                  <p>
                    <strong>bold subheading text</strong>
                  </p>

                  <p>
                    The <strong>50-3-0-20</strong> 50-30-20 rule is a pretty
                    well known budgeting framework developed by Elizabeth Warren
                    (yeah, aka presidential candidate Lizzy Warren!) in her 2006
                    bestseller, All Your Worth. This rule of thumb has stuck
                    around for more than a decade because it’s simple. The
                    50-30-20 rule is a pretty well known budgeting framework
                    developed by Elizabeth Warren (yeah, aka presidential
                    candidate Lizzy Warren!) in her 2006 bestseller, All Your
                    Worth. This rule of thumb has...
                  </p>

                  <blockquote>
                    “let’s make this a really good quote.”
                  </blockquote>

                  <p>
                    The <strong>50-3-0-20</strong> 50-30-20 rule is a pretty
                    well known budgeting framework developed by Elizabeth Warren
                    (yeah, aka presidential candidate Lizzy Warren!) in her 2006
                    bestseller, All Your Worth. This rule of thumb has stuck
                    around for more than a decade because it’s simple. The
                    50-30-20 rule is a pretty well known budgeting framework
                    developed by Elizabeth Warren (yeah, aka presidential
                    candidate Lizzy Warren!) in her 2006 bestseller, All Your
                    Worth. This rule of thumb has...
                  </p>

                  <ul>
                    <li>unordered list item</li>
                    <li>unordered list item</li>
                    <li>unordered list item</li>
                    <li>unordered list item</li>
                    <li>unordered list item</li>
                    <li>unordered list item</li>
                  </ul>

                  <img src={brokeNote2} />

                  <ol>
                    <li>ordered list item</li>
                    <li>ordered list item</li>
                    <li>ordered list item</li>
                    <li>ordered list item</li>
                    <li>ordered list item</li>
                    <li>ordered list item</li>
                  </ol>
                </main>
              </Col>
            </Row>

            <Row>
              <Col className="flush">
                <BlogIndex__Email />
              </Col>
            </Row>

            <Row>
              <Col className="flush">
                <div className="mb-4 related-container">
                  <h1 className="mb-4 related-article-title">
                    Related Articles
                  </h1>
                  {/* <LibraryThumbnails related={post} /> */}
                </div>
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
  }
`
