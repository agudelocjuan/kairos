import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import SearchModal from "./searchModal"
import SearchResults from "./searchResults"

import { setMenu } from "../../state/global"

import logo from "../../images/logos/kairos-logo.svg"
import searchIcon from "../../images/icons/search.svg"
import bellIcon from "../../images/icons/bell.svg"
import menu_close from "../../images/icons/menu-close.svg"
import menu_open from "../../images/icons/menu-open.svg"
import arrow from "../../images/icons/arrow-diag-red.svg"

import { setSearchOpen } from "../../state/global"

const HeaderBlog = ({ menu, searchOpen, dispatch }) => {
  const [isActive, setActive] = useState(false)

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

  let { edges } = data.allContentfulBlogPost
  const posts = edges.slice(0, 3)

  let blogList = posts.map((blog, index) => {
    const { body, title, slug } = blog.node

    return (
      <Link key={index} to={`/blog/${slug}`} className="module">
        <p className="title">{title}</p>
        <span className="cta inline-text-link" href="#">
          Read More <img src={arrow} alt="arrow" />{" "}
        </span>
      </Link>
    )
  })

  // notification toggle
  const handleToggle = () => {
    setActive(!isActive)
  }

  // search toggle
  const handleSearchToggle = () => {
    dispatch(setSearchOpen(!searchOpen))
  }

  return (
    <nav className="header--blog article">
      <div id="headerBlog">
        <a href="/">
          <img id="header-logo" src={logo} alt="" />
        </a>
        <img
          className={isActive ? "active" : null}
          onClick={handleToggle}
          id="bell"
          src={bellIcon}
          alt="bell icon"
        />

        <img
          onClick={() => dispatch(setMenu(!menu))}
          id="menu-button"
          src={menu ? menu_close : menu_open}
          alt=""
        />
      </div>

      <div
        id="search"
        className={searchOpen ? "active" : null}
        onClick={handleSearchToggle}
      >
        <img id="search-icon" src={searchIcon} alt="search icon" />
      </div>

      <div id="notifications" className={isActive ? "active" : null}>
        {blogList}
      </div>

      <SearchModal />
      <SearchResults />
    </nav>
  )
}

export default connect(
  state => ({
    menu: state.global.menu,
    searchOpen: state.global.searchOpen,
  }),
  null
)(HeaderBlog)
