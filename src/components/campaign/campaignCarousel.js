import React from "react"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"

const CampaignCarousel = () => {
  const options = {
    draggable: true,
    initialIndex: 0,
    wrapAround: true,
    pageDots: false,
    adaptiveHeight: true,
    selectedAttraction: 0.2,
    friction: 0.8,
    fade: true,
    prevNextButtons: false,
  }
  const slides = [
    {
      type: "video",
    },
    {
      type: "quote",
    },
  ]
  return (
    <Container fluid id="campaignCarousel">
      <Row className="d-flex justify-content-center title-row">
        <Col md="8">
          <h3 className="text-center">HEAR WHAT OUR PARTNERS HAVE TO SAY</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md="8">
          <Flickity className={"carousel mb-4"} options={options}>
            {slides.map((i, idx) => {
              const quoteBlock = (
                <div key={idx} className="w-75">
                  <p className="mt-2 mb-1">{i.type}</p>
                </div>
              )
              const videoBlock = (
                <div key={idx} className="w-75">
                  <p className="mt-2 mb-1">{i.type}</p>
                </div>
              )
              return i.type === "quote" ? quoteBlock : videoBlock
            })}
          </Flickity>
        </Col>
      </Row>
    </Container>
  )
}

export default CampaignCarousel
