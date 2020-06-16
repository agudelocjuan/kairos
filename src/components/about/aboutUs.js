import React, { useState, useEffect } from "react"
import { Link, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"
import Img from "gatsby-image"

import graffiti from "../../images/about/about-graffiti.png"

const AboutUs = ({ mobile }) => {
  let options = {
    draggable: true,
    initialIndex: 0,
    wrapAround: true,
    pageDots: false,
    adaptiveHeight: true,
    selectedAttraction: 0.2,
    friction: 0.8,
    fade: true,
    prevNextButtons: false,
  }
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "team/placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const team = [
    {
      name: "Ankur Jain",
      title: "Co-Founder & Co-CEO",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Andrew Fiance",
      title: "Co-Founder & Co-CEO",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Zoe Oz",
      title: "Head of Product & Brand",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Ryan Bloomer",
      title: "Partner",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Joyce Ok",
      title: "Assocaite",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Andrew Wang",
      title: "Chair of Investment Committee",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Ciara O'Sullivan",
      title: "People & Operations Manager",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Alex Klokus",
      title: "Operating Partner, Casa",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Angela Vranich",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Anne Fulenwider",
      title: "Operating Partner, Doyen",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Ben Lantos",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Ben Lewis",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Ben Marathappu",
      title: "Operating Partner, Cera",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Bryan Woods",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Lisa Barnett",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Michelle Muller",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Monica Molenaar",
      title: "Operating Partner, Doyen",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Paraag Sarva",
      title: "Operating Partner, Rhinn",
      team: "operating",
      img: "placeholder",
    },
    {
      name: "Ankur Jain",
      title: "Co-Founder & Co-CEO",
      team: "advisory",
      img: "placeholder",
    },
    {
      name: "Andrew Fiance",
      title: "Co-Founder & Co-CEO",
      team: "advisory",
      img: "placeholder",
    },
    {
      name: "Zoe Oz",
      title: "Head of Product & Brand",
      team: "advisory",
      img: "placeholder",
    },
    {
      name: "Ryan Bloomer",
      title: "Partner",
      team: "advisory",
      img: "placeholder",
    },
    {
      name: "Joyce Ok",
      title: "Associate",
      team: "advisory",
      img: "placeholder",
    },
    {
      name: "Andrew Wang",
      title: "Chair of Investment Committee",
      team: "advisory",
      img: "placeholder",
    },
  ]
  return (
    <Container fluid id="aboutUs" className={`bg-white`}>
      <Row className="header-row">
        <Col>
          <div className="cta-graffiti text-mustard">Who we are</div>
          <h2>
            We’re a group of entrepreneurs, activists, and creators dedicated to
            building a better future for our generation.
          </h2>
        </Col>
      </Row>
      <Row className="subheader-row">
        <Col>
          <img src={graffiti} alt="" />
          <h2>
            We believe life should be simple and affordable. We’re on a mission
            to get it there.
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 4, offset: 8 }}>
          <p className="mb-0 text-light-black">Operating Team</p>
          <p className="w-75">
            We work with industry leaders to identify and select the global
            probelms that Kairos focuses on each year.
          </p>
        </Col>
      </Row>
      {mobile ? (
        <Flickity className={"carousel mb-4"} options={options}>
          {team
            .filter(i => i.team === "operating")
            .map((i, idx) => {
              return (
                <Col className="px-0">
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>
                </Col>
              )
            })}
        </Flickity>
      ) : (
        <Row className="team-row">
          {team
            .filter(i => i.team === "operating")
            .map((i, idx) => {
              return (
                <Col md="4">
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>
                </Col>
              )
            })}
        </Row>
      )}

      <Row>
        <Col md={{ size: 4, offset: 8 }}>
          <p className="mb-0 mt-4 text-light-black">Advisory Team</p>
          <p className="w-75">
            We work with industry leaders to identify and select the global
            probelms that Kairos focuses on each year.
          </p>
        </Col>
      </Row>

      {mobile ? (
        <Flickity className={"carousel mb-4"} options={options}>
          {team
            .filter(i => i.team === "advisory")
            .map((i, idx) => {
              return (
                <Col className="px-0">
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>
                </Col>
              )
            })}
        </Flickity>
      ) : (
        <Row className="team-row">
          {team
            .filter(i => i.team === "advisory")
            .map((i, idx) => {
              return (
                <Col md="4">
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>
                </Col>
              )
            })}
        </Row>
      )}
    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(AboutUs)
