import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import hero from "../../images/companies/companiesHero.png"
import hero_mobile from "../../images/companies/companiesHero_mobile.png"
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
      header: "Lowering the Upfront Cost of Rent.",
      body:
        "Between a broker’s fee, first and last month’s rent, and a security deposit, we get crushed in upfront costs while renting. Rhino gives you back your security deposit and replaces it with a low-cost insurance replacement (like, as low as $5), so both you & your landlord are covered. We’ve already saved renters $100 million. Ready to get that cash back?",
      cta: "go to rhino",
      link: "https://www.sayrhino.com/",
      internal_link: false,
      image: rhino,
      color: "company-purple",
    },
    {
      title: "Bilt",
      eyebrow: "Coming Soon • NEW YORK CITY, NY",
      header: "A Path to Home Ownership",
      body:
        "We pay rent every month and we have nothing to show for it. It feels like we’re lighting our money on fire. Bilt will be the first ever credit card that can be used to pay rent at any apartment with no fees. You can boost your credit score with each rent payment & earn points on that enormous expense. Then, when you’re ready, you can use those points towards a down payment on a home.",
      cta: "get updates on bilt",
      link: "https://mailchi.mp/kairoshq/kairos-hq",
      internal_link: false,
      image: bilt,
      color: "company-blue",
    },
    {
      title: "Little Spoon",
      eyebrow: "Founded 2016 • NEW YORK CITY, NY",
      header: "Keeping your kid healthy.",
      body:
        "Being a parent now is very different than being a parent 20 years ago, and figuring out how keep our kids healthy is a daily challenge. Little spoon makes it easy (and affordable) to get our kids the nutrition they need, delivering fresh food, vitamins, and natural remedies straight to you. And if you’re looking for way to get all your parenting questions answered, their editorial site Is This Normal will be your new best friend.",
      cta: "go to little spoon",
      link: "https://www.littlespoon.com/",
      internal_link: false,
      image: little_spoon,
      color: "company-green",
    },
    {
      title: "Alloy",
      eyebrow: "Coming Soon • NEW YORK CITY, NY",
      header: "Keeping Yourself Healthy",
      body:
        "Aging doesn't need to be shitty. And being a woman shouldn't mean you get worse healthcare (read: menopause, osteoporosis, weight gain and many others). Alloy Health is a women's health care solution for living healthier, longer lives. They're bringing affordable and transparent healthcare directly to women, including a line of natural, FDA-approved products to help our generation age healthfully.",
      cta: "get updates on alloy",
      link: "https://mailchi.mp/kairoshq/kairos-hq",
      internal_link: false,
      image: alloy,
      color: "company-pink",
    },
    {
      title: "Cera",
      eyebrow: "founded 2016 • london, uk",
      header: "Care for Your Parents, Jobs for You",
      body:
        "With Cera, we make it easier to get affordable care in the comfort and independence of your own home. We arrange the best possible home care in our network within 24 hours, using artificial intelligence to predict the care your loved ones will need—and making sure your in-laws never have to move back in with you.",
      cta: "Go to Cera",
      link: "https://ceracare.co.uk/",
      internal_link: false,
      image: cera,
      color: "company-yellow",
    },
  ]
  return (
    <Container fluid id="companiesCompanies">
      <Row>
        <Col className="px-0">
          <img src={mobile ? hero_mobile : hero} alt="" className="w-100" />
        </Col>
      </Row>
      {companies.map((i, idx) => {
        let img_left = idx % 2 === 0
        let img_col = (
          <Col
            md="6"
            className="px-0 company-image"
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
              {i.internal_link ? (
                <Link
                  to={i.link}
                  className={`cta button-inline black mb-4 mt-3 mb-md-5 text-${i.color}`}
                >
                  {i.cta}
                </Link>
              ) : (
                <a
                  className={`cta button-inline black mb-4 mt-3 mb-md-5 text-${i.color}`}
                  href={i.link}
                >
                  {i.cta}
                </a>
              )}
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
