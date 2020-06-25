import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

import { setMobile } from "../../state/global"

import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"

import "../../styles/index.scss"
import bg from "../../images/global/site-background.png"

const Layout = ({
  children,
  dispatch,
  footerColor,
  menu,
  path,
  borderColor,
  applicationPage = false,
  jobs = false,
}) => {
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
      className={`${menu && "stop-scroll"} bg-${borderColor}`}
    >
      {!applicationPage && <Header />}
      <Menu />
      <div
        id="site-container"
        data-hightlight={colorIndex}
        onMouseDown={_onSelect.bind(this)}
      >
        <main>{children}</main>
        <Footer jobs={jobs} color={footerColor} borderColor={borderColor} />
      </div>
    </div>
  )
}

export default connect(
  state => ({ mobile: state.global.mobile, menu: state.global.menu }),
  null
)(Layout)
