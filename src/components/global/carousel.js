import React from "react"
import { useEmblaCarousel } from "embla-carousel-react"
import { connect } from "react-redux"

import arrow from "../../images/icons/carousel-arrow.svg"

// import Icon from "./scaffolding/icon"

const Carousel = props => {
  let { fill, show = 1, children } = props
  const [EmblaCarouselReact, embla] = useEmblaCarousel({
    speed: 6,
    loop: true,
    align: `center`,
  })

  return (
    <div className="carousel">
      <EmblaCarouselReact slidesToScroll={1}>
        <div className="carousel--container">
          {children.map((child, index) => (
            <div
              className={`carousel--slide${show ? ` is-${show}-up` : ``}`}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </EmblaCarouselReact>
      <div className="navigation">
        <div
          className="controls previous-slide"
          onClick={() => embla.scrollPrev()}
        >
          <img src={arrow} alt="" />
        </div>
        <div className="controls next-slide" onClick={() => embla.scrollNext()}>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}
export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(Carousel)
