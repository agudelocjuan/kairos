import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

import { setMobile } from "../../state/global"

import Header from "./header"
import Footer from "./footer"

import "../../styles/index.scss"
import bg from "../../images/global/site-background.png"

const Layout = ({ children, dispatch, footerColor }) => {
  let [colorIndex, setColorIndex] = useState(0)
  let colorCount = 3
  useEffect(() => {
    _onWindowResize()
    window.addEventListener("resize", _onWindowResize)
  }, [])

  function _onWindowResize() {
    if (window.innerWidth <= 768) {
      dispatch(setMobile(true))
    } else {
      dispatch(setMobile(false))
    }
  }

  function _onSelect() {
    setTimeout(() => {
      colorIndex === colorCount
        ? setColorIndex(colorIndex => 0)
        : setColorIndex(colorIndex => colorIndex + 1)
    }, 100)
  }

  return (
    <div
      id="site-background"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div
        id="site-container"
        data-hightlight={colorIndex}
        onMouseDown={_onSelect.bind(this)}
      >
        <Header />
        <main>{children}</main>
        <Footer color={footerColor} />
      </div>
    </div>
  )
}

export default connect(state => ({ mobile: state.global.mobile }), null)(Layout)
