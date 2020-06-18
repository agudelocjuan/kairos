import React, { useRef } from "react"
import { Link } from "gatsby"
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
        "You know what? It is beets. I've crashed into a beet truck. I gave it a cold? I gave it a virus. A computer virus. Did he just throw my cat out of the window? Just my luck, no ice.",
      image: tom,
      color: "blue",
    },
    {
      name: "Gary",
      company_logo: cera,
      review:
        "You know what? It is beets. I've crashed into a beet truck. I gave it a cold? I gave it a virus. A computer virus. Did he just throw my cat out of the window? Just my luck, no ice.",
      image: gary,
      color: "salmon",
    },
    {
      name: "Elle",
      company_logo: cera,
      review:
        "You know what? It is beets. I've crashed into a beet truck. I gave it a cold? I gave it a virus. A computer virus. Did he just throw my cat out of the window? Just my luck, no ice.",
      image: elle,
      color: "mustard",
    },
  ]
  return (
    <Container fluid id="jobsReviews">
      <Row id="reviewsRow">
        {reviews.map((i, idx) => {
          return (
            <Col md="4" className="review-container">
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
