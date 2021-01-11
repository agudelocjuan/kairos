import React, {useState} from "react"
import { Link } from "gatsby"
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


const Header = ({ mobile, menu, dispatch }) => {

  const [isActive, setActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const handleSearchToggle = () => {
    setSearchActive(!isSearchActive);
  };

  return (

    <nav className="header--blog article">

      <a className="back" href="/blog">
        <img id="back-icon" src={backIcon} alt="search icon" />
      </a>

      <div id="headerBlog">
        <img id="header-logo" src={logo} alt="" />
        <img className={isActive ? "active" : null} onClick={handleToggle} id="bell" src={bellIcon} alt="bell icon" />

        <img onClick={() => dispatch(setMenu(!menu))} id="menu-button" src={menu ? menu_close : menu_open} alt="" />
      </div>

      <div id="search" className={isSearchActive ? "active" : null} onClick={handleSearchToggle}>
        {/* <img id="search-icon" src={searchIcon} alt="search icon" /> */}
        <img id="search-icon" src={searchIcon} alt="search icon" />
      </div>

      <div id="notifications" className={isActive ? "active" : null}>
        <div className="module">
          <p className="title">Your Credit Could Have Dropped Without You Knowing...</p>
          <a className="cta inline-text-link" href="#">Read More <img src={arrow} alt="arrow" /> </a>
        </div>
        <div className="module">
          <p className="title">Your Credit Could Have Dropped Without You Knowing...</p>
          <a className="cta inline-text-link" href="#">Read More <img src={arrow} alt="arrow" /> </a>
        </div>
        <div className="module">
          <p className="title">Your Credit Could Have Dropped Without You Knowing...</p>
          <a className="cta inline-text-link" href="#">Read More <img src={arrow} alt="arrow" /> </a>
        </div>
        <div className="module">
          <p className="title">Your Credit Could Have Dropped Without You Knowing...</p>
          <a className="cta inline-text-link" href="#">Read More <img src={arrow} alt="arrow" /> </a>
        </div>
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
