import React, { useRef } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Accordion from "../global/accordion"

const JobsFAQ = ({ mobile }) => {
  let faq = [
    {
      question: "How long does training take?",
      answer:
        "Initial coursework will span 4 hours, after which you will be invited to register and apply for jobs on care.com. To complete a HHA or equivalent certification in your state, up to an additional 56 hours of digital training followed by an in-person practical session will be required. The total hours of coursework will vary by state – don’t worry CareAcademy will be your training partner all the way through to your HHA or equivalent certification.",
    },
    {
      question: "Do I need any previous training or experience in care?",
      answer: "Nope! No prior experience is required.",
    },
    {
      question: "What are the hours like and who will I report to?",
      answer:
        "You’re your own boss – the hours, days and duration of work are up to you. You will be working for a family of your choosing, operating your own business. Welcome to entrepreneurship!",
    },
    {
      question: "Can I find work near my home?",
      answer: "Yup! You’ll be matched with clients who live near you.",
    },
    {
      question: "How much does training cost?",
      answer: "It’s totally free!",
    },
    {
      question: "What salary can I expect?",
      answer:
        "This will vary by where you live and the care market in your area. Hourly rates are typical in this industry.",
    },
    {
      question: "How can I stay safe during the COVID-19 pandemic?",
      answer: "Check out the resources at care.com",
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
