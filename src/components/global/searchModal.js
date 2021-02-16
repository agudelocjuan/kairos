import React, { useState } from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import {
  setSearchOpen,
  setSearchResultsOpen,
  setSearchResults,
} from "../../state/global"
import { search } from "../../lib/api"

import cross from "../../images/icons/cross.svg"

export const SearchModal = ({ searchOpen, dispatch }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState(false)
  const disabled = searchQuery === "" || searchQuery.length < 2

  const handleSearchToggle = () => {
    dispatch(setSearchOpen(!searchOpen))
  }

  const handleSearch = async e => {
    e.preventDefault()
    try {
      const { data } = await search(searchQuery)
      setError(false)
      dispatch(setSearchResults(data))
      dispatch(setSearchResultsOpen(true))
      handleSearchToggle()
    } catch (err) {
      console.error(err)
      setError("Sorry. Something went wrong. Please try again")
      dispatch(setSearchResults({ items: [], total: 0 }))
    }
  }
  return (
    <div id="search-wrapper" className={searchOpen ? "active" : null}>
      <span id="search-toggle" onClick={handleSearchToggle}>
        <img src={cross} />
      </span>
      <Container fluid>
        <Row>
          <Col md="10" id="main">
            <form onSubmit={handleSearch}>
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                name="query"
                type="text"
                placeholder="Search anything..."
              />
              <button disabled={disabled} type="submit">
                SEARCH
              </button>
            </form>
            {error && <p className="search-error">{error}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default connect(
  state => ({
    searchOpen: state.global.searchOpen,
  }),
  null
)(SearchModal)
