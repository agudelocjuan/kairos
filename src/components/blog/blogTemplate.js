import React from "react"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import SEO from "../global/seo"
import Layout from "../global/layout"

class BlogTemplate extends React.Component {
  render() {
    const pageColor = "salmon"
    const borderColor = "site-border-black"
    const { pageContext, data, location } = this.props
    const { postType } = pageContext
    const post = get(this.props, "data.contentfulBlogPost")

    // this is where all the post content is contained
    console.log(post)

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
              <Col>
                {post ? <h1>{post.title}</h1> : <h1> Default Blog Title</h1>}
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
