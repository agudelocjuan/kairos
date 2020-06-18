import React, { useRef } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Accordion from "../global/accordion"

const JobsFAQ = ({ mobile }) => {
  let faq = [
    {
      question: "this is my first question",
      answer:
        "this is my answer lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      question: "this is my second question",
      answer:
        "this is my answer lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      question: "this is my third question",
      answer:
        "this is my answer lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ]
  return (
    <Container fluid id="jobsFAQ">
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <div className="faq-header mb-4">Frequently Asked Questions</div>
          {faq.map((i, idx) => {
            return (
              <Accordion id={idx} key={idx} question={i.question}>
                {i.answer}
              </Accordion>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsFAQ)
