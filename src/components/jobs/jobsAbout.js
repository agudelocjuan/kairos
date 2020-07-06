import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import job from "../../images/jobs/need-a-job.png"
import works from "../../images/jobs/how-this-works.png"

const JobsHero = ({ mobile }) => {
  const ref = React.createRef()
  const _handleClick = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      offset: "50px",
    })
  }
  return (
    <Container fluid id="jobsAbout">
      <div className="offset-button-container">
        <div
          className="cta button-inline black mb-4 mt-3 mb-md-5"
          onClick={_handleClick}
        >
          Apply Now
        </div>
      </div>
      {/*
        <Row id="logo-row">
          <Col xs="12">
            <div className="navigational-graffiti text-salmon text-center">
              brought to you by
            </div>
          </Col>
          <Col className="logo-col" xs="4">
            <img src={care_logo} alt="" />
          </Col>
          <Col className="logo-col" xs="4">
            <img src={kairos_logo} alt="" />
          </Col>
          <Col className="logo-col" xs="4">
            <img src={care_academy_logo} alt="" />
          </Col>
        </Row>
        */}

      <Row className="image-rows top">
        <Col md={{ size: 6 }} className="floating-col">
          <h2 className="pb-3">Join us on the front lines of healthcare.</h2>
          <p>
            In the past few months, over 40 million American’s have lost their
            jobs. We want to help.
          </p>
          <p>
            After successfully launching a job creation plan in the UK with our
            healthcare company, Cera, and the Ministry of Health - we are now
            bringing this effort Stateside.
          </p>
          <p>
            We’re helping 10,000 people begin a new career in home care. Apply
            now to begin your training and earn your certification as a Home
            Health Aid (HHA) - your first step in a new, fulfilling career.
          </p>
        </Col>
        {!mobile && (
          <Col md={{ size: 6 }}>
            <img src={job} className="w-100" alt="" />
          </Col>
        )}

        {mobile && (
          <Col>
            <img src={job} alt="" />
          </Col>
        )}
      </Row>
      <Row className="image-rows bottom">
        {!mobile && (
          <Col md="6">
            <div
              className="h-100 w-100"
              style={{
                background: `url(${works})`,
                backgroundPosition: `center top`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
              }}
            ></div>
          </Col>
        )}

        <Col md={{ size: 5, offset: 0 }} className="floating-col">
          <h3>About The Campaign</h3>
          <p>
            Kairos has partnered with Care Academy to train 10,000 Americans as
            home care providers.
          </p>
          <p>
            COVID-19 has disproportionately affected our elderly population,
            requiring they stay at home and out of hospitals. The need for home
            care is needed now more than ever, and it's on us to step up to the
            frontlines during this unprecedented time.
          </p>
          <p>
            Through this program you will have an opportunity to earn a Home
            Health Aid Certification (HHA), which will open up immediate
            employment opportunities supporting families across the country.
            Kairos has also partnered with Care.com to provide all applicants
            access to additional job opportunities.{" "}
          </p>
          <p ref={ref}>Welcome to the Home Care Heroes Campaign.</p>
        </Col>
        {mobile ? (
          <Col>
            <img src={works} alt="" />
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(JobsHero)
