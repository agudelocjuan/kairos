import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { setMenu } from "../../state/global"

import logo from "../../images/logos/kairos-logo.svg"
import menu_close from "../../images/icons/menu-close.svg"
import menu_open from "../../images/icons/menu-open.svg"

const Header = ({ mobile, menu, dispatch }) => {
  return (
    <div id="header">
      <Link id="header-logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <img
        id="menu-button"
        onClick={() => dispatch(setMenu(!menu))}
        src={menu ? menu_close : menu_open}
        alt=""
      />
    </div>
  )
}

export default connect(
  state => ({ mobile: state.global.mobile, menu: state.global.menu }),
  null
)(Header)
