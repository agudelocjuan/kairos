import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { setMenu } from "../../state/global"

import logo from "../../images/logos/kairos-logo.svg"
import menu_close from "../../images/icons/menu-close.svg"
import menu_open from "../../images/icons/menu-open.svg"

const Header = ({ mobile, menu, dispatch }) => {
  return (
    <div id="header" onClick={() => dispatch(setMenu(!menu))}>
      <img id="header-logo" src={logo} alt="" />
      <img id="menu-button" src={menu ? menu_close : menu_open} alt="" />
    </div>
  )
}

export default connect(
  state => ({ mobile: state.global.mobile, menu: state.global.menu }),
  null
)(Header)
