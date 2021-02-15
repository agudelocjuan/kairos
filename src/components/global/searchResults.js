import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import backIcon from "../../images/icons/back.svg"
import cross from "../../images/icons/cross.svg"

import { setSearchResultsOpen, setSearchOpen } from "../../state/global"

export const SearchResults = ({ searchResults, resultsOpen, dispatch }) => {
  const handleBack = () => {
    dispatch(setSearchOpen(true))
    dispatch(setSearchResultsOpen(false))
  }

  const handleClose = () => {
    dispatch(setSearchResultsOpen(false))
  }

  const tagColor = tag => {
    switch (tag.toLowerCase()) {
      case "work":
        return "bg-mustard"
      case "money":
        return "bg-blue"
      default:
        return ""
    }
  }

  const linkGenerator = (slug, type) => {
    switch (type) {
      case "blogPost":
        return `/blog/${slug}`

      default:
        return `${slug}`
    }
  }

  return (
    <Col id="search-results" className={resultsOpen ? "active" : null}>
      <Row className="search-results__header">
        <button id="search-back" onClick={handleBack} title="Back">
          <img id="back-icon" src={backIcon} alt="Back" />
        </button>
        <button id="search-toggle" onClick={handleClose} title="Close">
          <img src={cross} alt="Close" />
        </button>
        <p>
          <span>Search results for:</span>
          <span>&nbsp;{searchResults?.query}</span>
        </p>
      </Row>
      <div className="search-results__container">
        {searchResults?.items &&
          searchResults.items.map((item, idx) => (
            <Row key={item.slug + idx} className="search-results__result">
              <Col md={3} className="search-results__image">
                {item.heroImage && (
                  <img
                    src={item.heroImage.url + "?w=400"}
                    alt={item.heroImage.alt}
                  />
                )}
              </Col>
              <Col md={9} className="search-results__details">
                <ul>
                  {item?.tags &&
                    item.tags.map(tag => (
                      <li className={tagColor(tag)}>{tag}</li>
                    ))}
                </ul>
                <Link
                  className="search-result__title"
                  to={linkGenerator(item.slug, item.type)}
                >
                  {item.title}
                </Link>
                {item?.description && <p>{item.description}</p>}
                <Link
                  className="search-result__more"
                  to={linkGenerator(item.slug, item.type)}
                >
                  READ MORE
                </Link>
              </Col>
            </Row>
          ))}
      </div>
    </Col>
  )
}

const mapStateToProps = state => ({
  resultsOpen: state.global.resultsOpen,
  searchResults: state.global.searchResults,
})

export default connect(mapStateToProps, null)(SearchResults)
