require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const Promise = require("bluebird")
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              totalCount
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log("ERROR" + result.errors)
          reject(result.errors)
        }
        const blog = result.data.allContentfulBlogPost.edges
        paginate({
          createPage,
          items: blog,
          itemsPerPage: 6,
          pathPrefix: "/blog",
          component: path.resolve("src/templates/blogIndex.js"),
        })
        blog.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: path.resolve("src/components/blog/blogTemplate.js"),
            context: {
              slug: post.node.slug,
              postType: "blog",
            },
          })
        })
      })
    )
  })
}
