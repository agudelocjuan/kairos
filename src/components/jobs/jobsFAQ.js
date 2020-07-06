import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Accordion from "../global/accordion"

const JobsFAQ = ({ mobile }) => {
  let faq = [
    {
      question: "How do I know if homecare is right for me?",
      answer: [
        "You are compassionate and enjoy helping others and giving back to your community.",
        "You have experience in customer facing roles like retail, hospitality, or food service.",
        "You’re a “people person” with strong communication skills, patience, and a good sense of humor.",
        "You want a flexible schedule with competitive pay.",
        "You’re ready to start a new career with growth potential.",
      ],
    },
    {
      question: "How long does training take?",
      answer: [
        "Initial coursework will span 4 hours, after which you will be invited to register and apply for jobs on care.com. To complete a HHA or equivalent certification in your state, up to an additional 56 hours of digital training followed by an in-person practical session will be required. The total hours of coursework will vary by state – don’t worry CareAcademy will be your training partner all the way through to your HHA certification and job placement into an agency.",
      ],
    },
    {
      question: "What qualifications would make me a good fit for this job?",
      answer: [
        "No prior experience is required, though this career is especially well-suited for people who have worked in hospitality & service industries.",
      ],
    },
    {
      question: "Are there any other types of training available?",
      answer: [
        "Home Health Aide Training: Becoming a HHA is the first step in the training process. Home Health Aides assist their patients with everyday tasks like mobility, medication, and meals to name a few.",
        "Certified Nursing Assistant Training: CNAs work in a wide variety of settings including nursing homes, hospitals, and rehabilitation centers. Because of their additional medical training, they are responsible for monitoring their patients’ health, taking vitals, tracking their symptoms, and speaking with clients about health concerns. CareAcademy offers training to become a CNA (which includes the certification program, a written exam, and a practical exam). This training can take anywhere from 4-12 weeks.",
        "Restorative Nurse’s Aide Training: You can become an RNA after receiving your CNA certification. RNAs have additional training in restorative nursing care, helping patients gain an improved quality of life by increasing their strength and mobility.",
        "Licensed Practical Nurse Training: An LPN works directly with doctors and registered nurses to take vitals, collect samples, administer medications, and ensure their patients are comfortable. Becoming an LPN typically takes about 12 months to complete (a combination of classroom and clinical work).",
      ],
    },
    {
      question: "What are the hours like and who will I report to?",
      answer: [
        "You will be working with a local agency to find clients that best fit your skills. Your hours will depend on the needs of those you care for, as well as your own schedule.",
      ],
    },
    {
      question: "Can I find work near my home?",
      answer: ["Yup! You’ll be matched with clients who live near you."],
    },
    {
      question: "How much does training cost?",
      answer: ["It’s totally free!"],
    },
    {
      question: "What salary can I expect?",
      answer: [
        "The HHA certification is an entry into a long, fulfilling career. The salary associated with this type of training will vary by where you live and the care market in your area, but hourly rates are typical. If you choose to continue your education towards the CNA, LPN or RNA certifications, you can expect higher salaries.",
      ],
    },
    {
      question: "How can I stay safe during the COVID-19 pandemic?",
      answer: ["Check out the resources at care.com"],
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
