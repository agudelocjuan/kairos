import React from "react"
import { Container, Row, Col } from "reactstrap"
import YouTube from "react-youtube"

import Carousel from "../global/carousel"

const options = {
  loop: true,
}
const slides = [
  {
    type: "video",
    videoId: "u57uy6gKSlw",
  },
  {
    type: "quote",
    quote:
      "By working with city governments to make onerous security deposits optional, Rhino wants to eliminate a barrier to affordable housing",
    source: "Curbed",
  },
  {
    type: "video",
    videoId: "DzymrHY-T-c",
  },
  {
    type: "quote",
    quote:
      "There were literally tenants crying tears of gratitude at City Hall but real estate investor associations were also in support,",
    source: "PG Sittenfeld, Cincinnati City Council, NBC article",
  },
]

class CampaignCarousel extends React.Component {
  render() {
    return (
      <Container fluid id="campaignCarousel">
        <Row className="d-flex justify-content-center title-row">
          <Col md="8">
            <h3 className="text-center">HEAR WHAT OUR PARTNERS HAVE TO SAY</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md="10">
            <Carousel className={"carousel"}>
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
                return i.type === "quote" ? quoteBlock : videoBlock
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CampaignCarousel
