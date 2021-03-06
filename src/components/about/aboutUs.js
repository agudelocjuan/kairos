import React from "react"
import { useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import Flickity from "react-flickity-component"
import Img from "gatsby-image"

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
      alex_fiance: file(relativePath: { eq: "team/alex_fiance.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      angela_vranich: file(relativePath: { eq: "team/angela_vranich.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ankur_jain: file(relativePath: { eq: "team/ankur_jain.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anne_fullenwider: file(
        relativePath: { eq: "team/anne_fullenwider.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ben_lewis: file(relativePath: { eq: "team/ben_lewis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bobbi_brown: file(relativePath: { eq: "team/bobbi_brown.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ciara_osullivan: file(relativePath: { eq: "team/ciara_osullivan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cyrus_ferguson: file(relativePath: { eq: "team/cyrus_ferguson.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      david_carey: file(relativePath: { eq: "team/david_carey.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joyce_ok: file(relativePath: { eq: "team/joyce_ok.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lisa_barnett: file(relativePath: { eq: "team/lisa_barnett.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mahiben_maruthappu: file(
        relativePath: { eq: "team/mahiben_maruthappu.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mark_thompson: file(relativePath: { eq: "team/mark_thompson.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marta_fox: file(relativePath: { eq: "team/marta_fox.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mary_martha_stasinopoulus: file(
        relativePath: { eq: "team/mary_martha_stasinopoulus.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mehmet_oz: file(relativePath: { eq: "team/mehmet_oz.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michael_dubin: file(relativePath: { eq: "team/michael_dubin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michelle_mueller: file(
        relativePath: { eq: "team/michelle_mueller.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      monica_molenaar: file(relativePath: { eq: "team/monica_molenaar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paraag_sarva: file(relativePath: { eq: "team/paraag_sarva.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sarah_baker: file(relativePath: { eq: "team/sarah_baker.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eddy_kleinhaus: file(relativePath: { eq: "team/eddy_kleinhaus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sylvan_gu: file(relativePath: { eq: "team/sylvan_gu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      roger_goodell: file(relativePath: { eq: "team/roger_goodell.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ronan_dunne: file(relativePath: { eq: "team/ronan_dunne.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vicente_fox: file(relativePath: { eq: "team/vicente_fox.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zoe_oz: file(relativePath: { eq: "team/zoe_oz.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      andrew_wang: file(relativePath: { eq: "team/andrew_wang.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ryan_bloomer: file(relativePath: { eq: "team/ryan_bloomer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ben_lantos: file(relativePath: { eq: "team/ben_lantos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bryan_woods: file(relativePath: { eq: "team/bryan_woods.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      omar_sultan_al_olama: file(
        relativePath: { eq: "team/omar_sultan_al_olama.jpeg" }
      ) {
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
      img: "ankur_jain",
    },
    {
      name: "Alex Fiance",
      title: "Co-Founder & Co-CEO",
      team: "operating",
      img: "alex_fiance",
    },
    {
      name: "Zoe Oz",
      title: "Chief Marketing Officer",
      team: "operating",
      img: "zoe_oz",
    },
    {
      name: "Ryan Bloomer",
      title: "Partner",
      team: "operating",
      img: "ryan_bloomer",
    },
    {
      name: "Ciara O'Sullivan",
      title: "People & Operations Manager",
      team: "operating",
      img: "ciara_osullivan",
    },
    {
      name: "Joyce Ok",
      title: "Financial Strategy",
      team: "operating",
      img: "joyce_ok",
    },
    {
      name: "Mary Martha Stasinopoulos",
      title: "Head of Consumer Insights",
      team: "operating",
      img: "mary_martha_stasinopoulus",
    },
    {
      name: "Cyrus Ferguson",
      title: "Content Manager",
      team: "operating",
      img: "cyrus_ferguson",
    },
    {
      name: "Andrew Wang",
      title: "Chair of Investment Committee",
      team: "operating",
      img: "andrew_wang",
    },
    {
      name: "Angela Vranich",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "angela_vranich",
    },
    {
      name: "Anne Fulenwider",
      title: "Operating Partner, Alloy",
      team: "operating",
      img: "anne_fullenwider",
    },
    {
      name: "Ben Lantos",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "ben_lantos",
    },
    {
      name: "Ben Lewis",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "ben_lewis",
    },
    {
      name: "Ben Marathappu",
      title: "Operating Partner, Cera",
      team: "operating",
      img: "mahiben_maruthappu",
    },
    {
      name: "Bryan Woods",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "bryan_woods",
    },
    {
      name: "Lisa Barnett",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "lisa_barnett",
    },
    {
      name: "Michelle Muller",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "michelle_mueller",
    },
    {
      name: "Monica Molenaar",
      title: "Operating Partner, Alloy",
      team: "operating",
      img: "monica_molenaar",
    },
    {
      name: "Paraag Sarva",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "paraag_sarva",
    },
    {
      name: "Sarah Baker",
      title: "Head of Strategic Initiatives",
      team: "operating",
      img: "sarah_baker",
    },
    {
      name: "Eddy Kleinhans",
      title: "General Counsel",
      team: "operating",
      img: "eddy_kleinhaus",
    },
    {
      name: "Sylvan Gu",
      title: "Content Manager, Video",
      team: "operating",
      img: "sylvan_gu",
    },
    {
      name: "Bobbi Brown",
      title: "Founder, Bobbi Brown",
      team: "advisory",
      img: "bobbi_brown",
    },
    {
      name: "David Carey",
      title: "Hearst Corporation Senior Vice President of Public Affairs",
      team: "advisory",
      img: "david_carey",
    },
    {
      name: "Dr. Mehmet Oz",
      title: "Host, Dr. Oz Show",
      team: "advisory",
      img: "mehmet_oz",
    },
    {
      name: "Mark Thompson",
      title: "CEO, New York Times",
      team: "advisory",
      img: "mark_thompson",
    },
    {
      name: "Marta Fox",
      title: "Founder, Centro Fox",
      team: "advisory",
      img: "marta_fox",
    },
    {
      name: "Roger Goodell",
      title: "Commissioner, National Football League",
      team: "advisory",
      img: "roger_goodell",
    },
    {
      name: "Ronan Dunne",
      title: "President, Verizon Wireless",
      team: "advisory",
      img: "ronan_dunne",
    },
    {
      name: "Vicente Fox",
      title: "Former President of Mexico",
      team: "advisory",
      img: "vicente_fox",
    },
    {
      name: "Omar Sultan Al Olama",
      title: "Minster for AI, United Arab Emirates",
      team: "advisory",
      img: "omar_sultan_al_olama",
    },
  ]
  return (
    <Container fluid id="aboutUs" className={`bg-white`}>
      <Row className="header-row text-center">
        <Col md={{ size: 10, offset: 1 }}>
          <div className="cta-graffiti text-mustard mb-5">Who we are</div>
          <h2>
            We believe life should be simple and affordable. And we’re on a
            mission to get it there.
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 5, offset: 0 }}>
          <h3 className="mb-0 text-salmon">Our Team</h3>
          <p className="w-75">
            We’re a team of entrepreneurs, activists, and creators dedicated to
            building a better future for our generation. We believe life should
            be simple and affordable. And we’re on a mission to get it there
            through this studio.
          </p>
        </Col>
      </Row>
      {mobile ? (
        <Flickity className={"carousel mb-4"} options={options}>
          {team
            .filter(i => i.team === "operating")
            .map((i, idx) => {
              return (
                <Col key={idx} className="w-75">
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
                  <Col key={idx} md="4">
                    <Img fluid={data[i.img].childImageSharp.fluid} />
                    <p className="mt-2 mb-1">{i.name}</p>
                    <p className="text-light-black">{i.title}</p>
                  </Col>
                )
              })}
          </Row>
        )}

      <Row>
        <Col md={{ size: 5, offset: 0 }}>
          <h3 className="mb-0 mt-4 text-salmon">Our Advisors</h3>
          <p className="w-75">
            We work with a team of badass experts from healthcare to government
            to media.
          </p>
        </Col>
      </Row>

      {mobile ? (
        <Flickity className={"carousel mb-4"} options={options}>
          {team
            .filter(i => i.team === "advisory")
            .map((i, idx) => {
              return (
                <Col key={idx} className="w-75">
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
                  <Col key={idx} md="4">
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
