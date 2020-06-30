import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import cera from "../../images/jobs/cera_logo.png"
import elle from "../../images/jobs/elle.png"
import gary from "../../images/jobs/gary.png"
import tom from "../../images/jobs/tom.png"

const JobsReviews = ({ mobile }) => {
  let reviews = [
    {
      name: "Tom",
      company_logo: cera,
      review:
        "Finding homecare has been a game changer for me! I have the flexibility to set my own schedule and I finally feel like I'm doing something that matters. The effort and energy I bring everyday helps my clients have a better, safer life.",
      image: tom,
      color: "blue",
    },
    {
      name: "Gary",
      company_logo: cera,
      review:
        "One of the most rewarding parts of being a caregiver is that you're making real connections with real people. The level of trust I have with the people I care for feels almost like family.",
      image: gary,
      color: "salmon",
    },
    {
      name: "Elle",
      company_logo: cera,
      review:
        "I feel lucky right now that I'm in a career where my skills are needed and there's lots of room to grow. I'm always learning and improving and I know that I can work towards becoming a supervisor or getting a higher certification if I want to.",
      image: elle,
      color: "mustard",
    },
  ]
  return (
    <Container fluid id="jobsReviews">
      <Row className="hero-row">
        <Col className="d-flex flex-column align-items-center text-center">
          <h2>Dont Just Take{mobile ? <br /> : " "}It From Us</h2>
          <div className="cta-graffiti text-salmon">
            Hear from our
            <br />
            healthcare heros
          </div>
        </Col>
      </Row>
      <Row id="reviewsRow">
        {reviews.map((i, idx) => {
          return (
            <Col key={idx} md="4" className="review-container">
              <div className={`review-box border border-${i.color}`}>
                <p>{i.review}</p>
                <div className="meta-container">
                  <div>
                    <img src={i.company_logo} alt="" />
                  </div>
                  <h3>{i.name}</h3>
                </div>
                <img className="profile-photo" src={i.image} alt="" />
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsReviews)
