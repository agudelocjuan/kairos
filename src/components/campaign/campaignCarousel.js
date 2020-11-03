import React from "react"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"
import YouTube from "react-youtube"

const CampaignCarousel = () => {
  const options = {
    draggable: true,
    wrapAround: true,
    pageDots: true,
    adaptiveHeight: false,
    selectedAttraction: 0.2,
    friction: 0.8,
    fade: false,
    prevNextButtons: false,
  }
  const slides = [
    {
      type: "quote",
      quote:
        "There were literally tenants crying tears of gratitude at City Hall but real estate investor associations were also in support,",
      source: "PG Sittenfeld, Cincinnati City Council, NBC article",
    },
    {
      type: "video",
      videoId: "u57uy6gKSlw",
      embed:
        "https://www.youtube.com/watch?v=u57uy6gKSlw&feature=youtu.be&ab_channel=TeamKairos",
    },
    {
      type: "quote",
      quote:
        "By working with city governments to make onerous security deposits optional, Rhino wants to eliminate a barrier to affordable housing",
      source: "Curbed",
    },
    {
      type: "video",
      embed: "https://www.youtube.com/watch?v=DzymrHY-T-c&feature=youtu.be",
      videoId: "DzymrHY-T-c",
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
        <Col md="12">
          <Flickity className={"carousel mb-4"} options={options}>
            {slides.map((i, idx) => {
              const quoteBlock = (
                <div key={idx} className="slide is-quote">
                  <div className="title navigational-graffiti">{i.quote}</div>
                  <p>– {i.source}</p>
                </div>
              )
              const videoBlock = (
                <div key={idx} className="slide is-video">
                  <div className="v-container">
                    <YouTube videoId={i.videoId} />
                  </div>
                </div>
              )
              return (
                <div className="carousel--inner" key={idx}>
                  {i.type === "quote" ? quoteBlock : videoBlock}
                </div>
              )
            })}
          </Flickity>
        </Col>
      </Row>
    </Container>
  )
}

export default CampaignCarousel
