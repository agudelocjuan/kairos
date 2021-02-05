import React, {useState} from "react"
import { Index } from "elasticlunr"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import { setMenu } from "../../state/global"
import { Container, Row, Col } from "reactstrap"

import logo from "../../images/logos/kairos-logo.svg"
import cross from "../../images/icons/cross.svg"
import searchIcon from "../../images/icons/search.svg"
import bellIcon from "../../images/icons/bell.svg"
import menu_close from "../../images/icons/menu-close.svg"
import menu_open from "../../images/icons/menu-open.svg"
import arrow from "../../images/icons/arrow-diag-red.svg"

const Header = ({ mobile, menu, dispatch }) => {
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

  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const handleSearchToggle = () => {
    setSearchActive(!isSearchActive);
  };

  let blogList = posts.map((blog, index) => {
  const {body, title, slug} = blog.node

  return (
      
    <Link key={index} to={`/blog/${slug}`} className="module">
        <p className="title">{title}</p>
        <span className="cta inline-text-link" href="#">Read More <img src={arrow} alt="arrow" /> </span>
    </Link>

  ) 
})

return (
  <nav className="header--blog">

    <div id="headerBlog">
      <a href="/">
        <img id="header-logo" src={logo} alt="" />
      </a>
      <img className={isActive ? "active" : null} onClick={handleToggle} id="bell" src={bellIcon} alt="bell icon" />

      <img onClick={() => dispatch(setMenu(!menu))} id="menu-button" src={menu ? menu_close : menu_open} alt="" />
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
)(Header)
