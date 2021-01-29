import React, {useState} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import { Container, Row, Col } from "reactstrap"

import { setMenu } from "../../state/global"

import logo from "../../images/logos/kairos-logo.svg"
import cross from "../../images/icons/cross.svg"
import backIcon from "../../images/icons/back.svg"
import searchIcon from "../../images/icons/search.svg"
import bellIcon from "../../images/icons/bell.svg"
import menu_close from "../../images/icons/menu-close.svg"
import menu_open from "../../images/icons/menu-open.svg"

import arrow from "../../images/icons/arrow-diag-red.svg"

const HeaderBlog = ({ mobile, menu, dispatch }) => {

  const [isActive, setActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

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
  const posts = edges.slice(0,3)

  let blogList = posts.map((blog, index) => {
    // console.log(blog.node)
    const {body, title, slug} = blog.node

    console.log(title)
    
    return (
      
      <Link key={index} to={`/blog/${slug}`} className="module">
          <p className="title">{title}</p>
          <span className="cta inline-text-link" href="#">Read More <img src={arrow} alt="arrow" /> </span>
      </Link>

    ) 
  })

  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const handleSearchToggle = () => {
    setSearchActive(!isSearchActive);
  };



  return (

    <nav className="header--blog article">

      {/* <a className="back" href="/blog">
        <img id="back-icon" src={backIcon} alt="search icon" />
      </a> */}

      <div id="headerBlog">
        <a href="/">
          <img id="header-logo" src={logo} alt="" />
        </a>
        <img className={isActive ? "active" : null} onClick={handleToggle} id="bell" src={bellIcon} alt="bell icon" />

        <img onClick={() => dispatch(setMenu(!menu))} id="menu-button" src={menu ? menu_close : menu_open} alt="" />
      </div>

      <div id="search" className={isSearchActive ? "active" : null} onClick={handleSearchToggle}>
        {/* <img id="search-icon" src={searchIcon} alt="search icon" /> */}
        <img id="search-icon" src={searchIcon} alt="search icon" />
      </div>

      <div id="notifications" className={isActive ? "active" : null}>
        {blogList}
      </div>

      <div id="search-wrapper" className={isSearchActive ? "active" : null}>
        <span id="search-toggle" onClick={handleSearchToggle}>
          <img src={cross} />
        </span>

        <Container fluid>
          <Row>
            <Col md="10" id="main">

              <form>
                <input type="text" placeholder="Search anything..." />
                <button>SEARCH</button>
              </form>
            </Col>
          </Row>
        </Container>


      </div>

    </nav>
    

    

    
    
  )
}

export default connect(
  state => ({ mobile: state.global.mobile, menu: state.global.menu }),
  null
)(HeaderBlog)
