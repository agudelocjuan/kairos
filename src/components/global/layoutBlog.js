import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { setMobile } from "../../state/global"

import Header from "./headerBlog"
import Footer from "./footer"
import Menu from "./menu"

import "../../styles/index.scss"

const Layout = ({
  children,
  dispatch,
  footerColor,
  menu,
  path,
  borderColor,
  pageColor,
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

  const duration = 0.25

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration * 2,
        when: "afterChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  function _onSelect() {
    setTimeout(() => {
      colorIndex === colorCount
        ? setColorIndex(colorIndex => 0)
        : setColorIndex(colorIndex => colorIndex + 1)
    }, 100)
  }

  return (
    <div id="site-background" className={`${menu && "stop-scroll"}`}>
      {!applicationPage && <Header />}
      <Menu />
      <div
        id="site-container"
        data-hightlight={colorIndex}
        onMouseDown={_onSelect.bind(this)}
      >
        <main className={pageColor}>{children}</main>
        <Footer jobs={jobs} color={footerColor} borderColor={borderColor} />
      </div>
    </div>
  )
}

export default connect(
  state => ({ mobile: state.global.mobile, menu: state.global.menu }),
  null
)(Layout)
