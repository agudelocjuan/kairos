import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import hero from "../../images/companies/companiesHero.png"
import hero_mobile from "../../images/companies/companiesHero_mobile.png"
import openings from "../../images/companies/openings.png"
import alloy from "../../images/companies/alloy.png"
import bilt from "../../images/companies/bilt.png"
import cera from "../../images/companies/cera.png"
import little_spoon from "../../images/companies/little-spoon.png"
import rhino from "../../images/companies/rhino.png"

const CompaniesCompanies = ({ mobile }) => {
  let companies = [
    {
      title: "Rhino",
      eyebrow: "FOUNDED 2017 • NEW YORK CITY, NY",
      header: "upfront cost of rent.",
      body:
        "How would you like to never pay a security deposit again? With Rhino, you can pay as little as $5/month and we’ll insure the landlord for you. Renting is already expensive enough and moving sucks. Let us help make it less shitty.",
      cta: "go to rhino",
      link: "https://www.kairos.com",
      image: rhino,
      color: "company-purple",
    },
    {
      title: "Bilt",
      eyebrow: "Pre-Launch • NEW YORK CITY, NY",
      header: "A path to home ownership",
      body:
        "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Must go faster. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!",
      cta: "get updates on bilt",
      link: "https://www.kairos.com",
      image: bilt,
      color: "company-blue",
    },
    {
      title: "Little Spoon",
      eyebrow: "Founded 2016 • NEW YORK CITY, NY",
      header: "Keeping your kid healthy.",
      body:
        "Feeding your baby should be easy, affordable, and healthy. At Little Spoon, we deliver nutritional, organic, and incredibly tasty food right to your door at an affordable price. We swear it totally tastes good, and you will probably like eating it as much as your baby does. (We won’t judge if you order for yourself…)",
      cta: "go to little spoon",
      link: "https://www.kairos.com",
      image: little_spoon,
      color: "company-green",
    },
    {
      title: "Alloy",
      eyebrow: "pre-launch • NEW YORK CITY, NY",
      header: "taking care of your health as you age",
      body:
        "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Must go faster. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!",
      cta: "get updates on alloy",
      link: "https://www.kairos.com",
      image: alloy,
      color: "company-pink",
    },
    {
      title: "Cera",
      eyebrow: "founded 2016 • london, uk",
      header: "creating jobs and the future of our healthcare workforce.",
      body:
        "With Cera, we make it easier to get affordable care in the comfort and independence of your own home. We arrange the best possible home care in our network within 24 hours, using artificial intelligence to predict the care your loved ones will need—and making sure your in-laws never have to move back in with you.",
      cta: "Kairos X Cera 10k Jobs Campaign",
      link: "https://www.kairos.com",
      image: cera,
      color: "company-yellow",
    },
  ]
  return (
    <Container fluid id="companiesCompanies">
      <Row>
        <Col className="px-0">
          <img src={mobile ? hero_mobile : hero} alt="" />
        </Col>
      </Row>
      {companies.map((i, idx) => {
        let img_left = idx % 2 === 0
        let img_col = (
          <Col
            md="6"
            className="px-0"
            style={{
              background: `url(${i.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Col>
        )
        let about_col = (
          <Col md="6" className={`bg-${i.color} company-information`}>
            <div className="eyebrow">{i.eyebrow}</div>
            <h3>{i.header}</h3>
            <p>{i.body}</p>
            <div>
              <a
                className={`cta button-inline black mb-4 mt-3 mb-md-5 text-${i.color}`}
                href={i.link}
              >
                {i.cta}
              </a>
            </div>
          </Col>
        )
        return (
          <Row key={idx} className={`company-row`}>
            {img_left || mobile ? img_col : ""}
            {about_col}
            {!img_left && !mobile ? img_col : ""}
          </Row>
        )
      })}

      {/*
        <Row className="cta-row">
          <Col md="6" className="px-0">
            <img src={openings} alt="" />
          </Col>
          <Col md="6" className={`bg-yellow information`}>
            <div className="cta-graffiti">Join The Family</div>
            <p>
              It might feel scary, but we’re here to help. We’ve got the resources
              to help you adjust to this new normal. Reach out and ask us a
              question!
            </p>
            <Link to="/">
              <div className="franklin-cta">Our Openings</div>
            </Link>
          </Col>
        </Row>

      */}
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(CompaniesCompanies)
