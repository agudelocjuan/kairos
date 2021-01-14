import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

const LibraryThumbnails = ({ mobile, related = false, recent = false }) => {
  const data = useStaticQuery(graphql`
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
    }
  `)

//   console.log(edges)

  console.log(related)
  
  let { edges } = data.allContentfulBlogPost
//   let edges = nodes

console.log(edges)

// the code block below is making edges an empty array
// we basically need just an array with articles of the same tags
// how to write a filter statement with tags matching as a condition

  if (related && related.tags) {
    edges = edges.filter(i => {
      let { tags } = i
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          for (let j = 0; j < related.tags.length; j++) {
            if (tags[i] === related.tags[j]) {
              return true
            }
          }
        }
        return false
      }
    })
  }

  console.log(edges)

  edges.map((i, idx) => {
      console.log(i)
  })

  let display = edges.slice(0, 6).map((i, idx) => {
    let border_bottom = idx < 3 ? true : false
    let border_right = true
    if (idx === 5 || idx === 2) {
      border_right = false
    }

    // mobile ? (border_right = false) : (border_right = border_right)
    // mobile ? (border_bottom = true) : (border_right = border_right)

    console.log(i)

    return (
      <Col
        xs="12"
        md="4"
        key={idx}
        className={
          idx + " thumbnail " + (border_bottom ? " bottom-border " : "")
        }
      >
        <div className="wrapper">
          <Link to={"/resources/library/" + i.slug}>
            <div
              className="container-image"
              style={{
                backgroundImage: `url(${i.heroImage.fluid.src})`,
              }}
            />
          </Link>
        </div>

        <div
          className={"text-container " + (border_right ? " right-border " : "")}
        >
          <Link to={"/resources/library/" + i.slug}>
            <div className="tag-container">
              {i.tags
                ? i.tags.slice(0, 1).map((i, idx) => {
                    return (
                      <div key={idx} className="tag body-small">
                        {i}
                      </div>
                    )
                  })
                : ""}
            </div>
          </Link>
          <Link to={"/resources/library/" + i.slug}>
            <span className="thumbnail-title">{i.title}</span>
          </Link>
        </div>
      </Col>
    )
  })
  
  console.log(display)
  
  return (
    <Container fluid id="libraryThumbnails">
      <Row>{display}</Row>
    </Container>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryThumbnails)