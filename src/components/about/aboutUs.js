import React, {useState} from "react"
import { useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col, Modal } from "reactstrap"
import Flickity from "react-flickity-component"
import Img from "gatsby-image"

import crossSmall from "../../images/icons/cross-small.svg"

const AboutUs = ({ mobile }) => {

  let [modal, setModal] = useState(null)

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
      carly_reilly: file(relativePath: { eq: "team/carly_reilly.jpg" }) {
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
      eddy_kleinhaus: file(relativePath: { eq: "team/eddy_kleinhaus.jpg" }) {
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
      esther_lee: file(relativePath: { eq: "team/esther_lee.jpg" }) {
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
      bio: "Ankur is the Co-Founder & Co-CEO of Kairos, which he launched in 2008 as a talent incubator. Before rejoining Kairos in May 2017, Jain was the VP of Product at Tinder, the world’s largest social network for meeting people. He joined Tinder after it acquired his previous company, Humin, where he served as Founder & CEO. Over the years, Jain has been recognized for a variety of achievements including the Young Global Leader by the World Economic Forum (2017). Previously, he was named a Leader del Futuro by the Ambrosetti Forum and as a Young Leader by both the World Foresight Forum and the St. Petersburg International Economic Forum. In 2011, Inc. magazine named Ankur Jain the “Best Connected 21-Year-Old in the World” and awarded Jain “30 Under 30.” In 2012, Jain was named “30 under 30: Solution Broker” by the Christian Science Monitor. In 2013, Jain was elected to the Innovation Board for the X-Prize Foundation and in 2015, Forbes named Jain to their “30 under 30” list. Ankur graduated from the Wharton School of Business at the University of Pennsylvania in 2011 and grew up in Seattle.",
    },
    {
      name: "Alex Fiance",
      title: "Co-Founder & Co-CEO",
      team: "operating",
      img: "alex_fiance",
      bio: "Alex is the Co-Founder & Co-CEO of Kairos. He has been leading Kairos since 2013, building out the K50 program and leading the company from its roots as a student-run organization into its current focus on building a family of brands designed to make life more affordable. Prior to Kairos Alex worked at Activision helping launch record-breaking IP including Call of Duty and Skylanders. Alex graduated from University of Southern California in 2010 and grew up in Los Angeles.",
    },
    {
      name: "Zoe Oz",
      title: "Chief Marketing Officer",
      team: "operating",
      img: "zoe_oz",
      bio: "Zoe is the Chief Marketing Officer at Kairos. She leads brand and marketing strategy as well as new product development. She previously developed & led the Kairos Fellowship, a community of the brightest young entrepreneurs around the world. Prior to joining Kairos, Zoe held positions in various medical research labs, including the cardiovascular division at Columbia Presbyterian Hospital, where she conducted analyses on the effects of sleep deprivation on young medical professionals. She then went on to work in fashion design & brand development at companies like Theory and Helmut lang. She graduated from Harvard University with High Honors, where she studied medicine and art. ",
    },
    {
      name: "Ryan Bloomer",
      title: "Partner",
      team: "operating",
      img: "ryan_bloomer",
      bio: "Ryan Bloomer is a partner at Kairos where he supports and invests in talented founders from around the world that are rethinking traditional industries. Ryan started investing in early stage companies at Blumberg Capital in San Francisco before raising his own fund, Momentum Venture Partners, at the age of 28. Over his career, he has invested in over 20 companies and worked with hundreds of entrepreneurs across the globe as a mentor and advisor. While in college, Ryan founded his own real estate company and was an operator at Garment Valetand 1-Page (which IPO’d as 1PG) where he was responsible for early growth, product operations, and hiring. Ryan splits his life between New York and the West Coast and graduated from Questrom School of Management at Boston University in 2007.",
    },
    {
      name: "Ciara O'Sullivan",
      title: "People & Operations Manager",
      team: "operating",
      img: "ciara_osullivan",
      bio: "Ciara O’Sullivan is Head of People Operations at Kairos. She’s responsible for all things employee experience & company culture, including hiring, office management, events, and onboarding processes across the Kairos family. Prior to Kairos, Ciara worked at Grovo Learning, a micro-learning company that was later acquired by Cornerstone OnDemand. While at Grovo, she was responsible for office management, employee experience, and corporate event planning. She was a critical member of the acquisition team, executing on various due diligence tasks leading up to deal execution, and later joined the Cornerstone OnDemand team to oversee the integration of Grovo employees as well as the employee experience of remote employees throughout the US. Ciara graduated from Syracuse University with a degree in English Education.",
    },
    {
      name: "Joyce Ok",
      title: "Financial Strategy",
      team: "operating",
      img: "joyce_ok",
      bio: "Joyce Ok is an Associate at Kairos, focused on financial strategy. She sits on the capital team, providing financial & operational support to the Kairos family of companies. Previously, Joyce worked in investment banking at Goldman Sachs in the Real Estate, Gaming, and Lodging group on multiple acquisitions and capital raises including multi-billion dollar transactions, debt raises, and IPOs. She then went on to work in business operations at Birdy Grey, a DTC retail start-up based in New York City. Joyce graduated from Brown University where she studied Business Economics.",
    },
    {
      name: "Mary Martha Stasinopoulos",
      title: "Head of Consumer Insights",
      team: "operating",
      img: "mary_martha_stasinopoulus",
      bio: "Mary Martha (just call her MM) joins Kairos from Glossier, a D2C unicorn in the beauty and personal care space, where she built the research and insights function from the ground up. As Head of Consumer Insights at Glossier, MM built an infrastructure for research, and a culture of using this research to make strategic decisions ranging from concept development, to new market evaluation, to brand strategy.Prior to Glossier, MM spent over five years at HBO in new media and product, tackling quantitative, qualitative, UX, and competitive research for HBO in the digital and streaming space. Much of that time was spent on the design and launch of HBO’s D2C product HBO NOW - including its pricing, partners, content, and customers.MM started her career at political polling firm PSB after getting her MA in Political Science while working the early shift for CNBC’s early, early show Worldwide Exchange. MM is a native New Yorker and received both her BA in 2011 and MA in 2012 from Columbia University.",
    },
    {
      name: "Carly Reilly",
      title: "Head of Communications",
      team: "operating",
      img: "carly_reilly",
      bio: "Carly Reilly is the Head of Communications at Kairos HQ. She previously served as the deputy chief of staff and then national finance director for Andrew Yang's 2020 presidential campaign. Raising nearly $40 million dollars in an average of $35 increments, Carly helped to spur Yang’s nationwide momentum, propelling him to seven Democratic primary debates. According to CNN, their campaign 'didn't just make history... [it] unquestionably put a sizable dent in the future as well.' Carly is a Washington Post contributor and has been featured in the New York Times, Washington Post Magazine, BuzzFeed, and Bloomberg. She lives in New York City and graduated from Tufts University where she studied political science and computer science.",
    },
    {
      name: "Cyrus Ferguson",
      title: "Content Manager",
      team: "operating",
      img: "cyrus_ferguson",
      bio: "Cyrus is a Content Manager at Kairos, leading the strategy and execution of editorial and social media content. Having started his career in marketing and branding at early stage startups, and later honing his obsession with great content in the media space for brands like Domino, and GQ, helping Kairos develop its voice is a natural intersection of passions. Cyrus holds a BA in Art and Communication Studies from Davidson College. He grew up in Aurora, Colorado, and now lives in Brooklyn with his wife, Brooke.",
    },
    {
      name: "Eddy Kleinhaus",
      title: "General Counsel",
      team: "operating",
      img: "eddy_kleinhaus",
      bio: "Eddy joins Kairos as General Counsel, bringing 20+ years of legal and operating experience to the team. He most recently served as the Chief Business Officer and Interim CEO for Myoscience, Inc. and was an integral driver of the company’s $220 million acquisition by Pacira Biosciences, Inc. Eddy brings extensive experience representing private and public companies as in-house counsel and significant operational experience to support the Kairos model. Eddy earned his J.D. from NYU School of Law and holds two undergraduate degrees from UC Berkeley in Rhetoric and Economics.",
    },
    {
      name: "Sarah Baker",
      title: "Head of Strategic Initiatives",
      team: "operating",
      img: "sarah_baker",
      bio: "Sarah was previously Chief of Staff at Andela - a Series D stage Africa-focused software engineering platform based in New York. Prior to joining Andela, Sarah was Head of North American Strategic Engagement at the London Stock Exchange Group (LSEG) since March 2016, based in New York. In this role, she works with pre IPO companies to prepare them for public listings. She also drove LSEG’s strategic growth in the region. Sarah regularly spoke publicly on capital markets issues. In June 2019, she was also appointed Chair of the UK Department of International Trade’s Working Group on US/UK Capital Markets. Sarah previously served as the LSEG’s Head of International Government Relations. She worked on initiatives including the launch of the UK-China Stock Connect programme - the first ever program enabling western companies to be traded in China and vice versa. She also partnered with the UK Government to grow domestic capital markets in key African countries, and lead government relations on LSEG’s M&A transactions. Between 2008 and 2010, Sarah worked for the UK Conservative Party as Head of Briefing for the Rt Hon David Cameron MP as Leader of the Opposition, then as Prime Minister. Between 2007 and 2008, Sarah was a Senior Researcher to the Rt Hon Theresa May MP. She has also worked as a Parliamentary Select Committee reporter, and for Independent Diplomat – a foreign policy focused NGO. Sarah holds a first class degree in Politics and International Relations from the University of Manchester, and a Masters degree from King’s College London. In 2016, she was named as one of Management Today’s 35 Under 35 businesswomen, and was also shortlisted for the UK’s Women of the Future Awards. She is an Associate Fellow of the Royal Commonwealth Society.",
    },
    {
      name: "Andrew Wang",
      title: "Chair of Investment Committee",
      team: "operating",
      img: "andrew_wang",
      bio: "Andrew Wang is the independent Chair of Kairos’ Investment Committee. He is also the Co-Founder & CEO of Valon, the leading FinTech mortgage servicer. Prior to Valon, Andrew was a Principal at Soros Fund Management, focusing on the intersection of private credit and venture capital. Andrew began his career at Goldman Sachs in the aviation finance group. He graduated from Harvard University with a BA and MA in Computer Science.",
    },
    {
      name: "Angela Vranich",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "angela_vranich",
      bio: "Angela started her career working in food-related television production, where she was involved in creative planning and execution. She decided to follow her passion into the world of organic food, founding a company that performed field marketing activities and grassroots activations for dozens of industry-leading brands. During this time, she managed a team of more than a hundred people in several regions across the country and gained valuable hands-on experience on the front lines of the food business. Through this experience, Angela identified an opportunity to reinvent the baby food category, and soon began working on a solution. This solution would become Little Spoon, the first company to deliver fresh, nutritionally optimized baby food via a direct-to-consumer model. As co-founder and Chief Product Officer, Angela directs branding and creative and meticulously oversees every consumer-facing touchpoint, ranging from physical product to digital experience. An avid chef and boutique fitness junkie, Angela is passionate about health, wellness, design and the future of food. Angela grew up in Pittsburgh, PA and received her BS in Marketing from St. Joseph’s University. She lives in New York City.",
    },
    {
      name: "Anne Fulenwider",
      title: "Operating Partner, Alloy",
      team: "operating",
      img: "anne_fullenwider",
      bio: "Anne Fulenwider is the co-founder of a women’s health company incubated by Kairos, where she also serves as an operating partner. From 2012-2019, she was the Editor-in-Chief of Marie Claire, where she oversaw all content for the brand in the United States. She also appeared as a frequent judge on the Emmy-winning TV show Project Runway and the mentor on Project Runway All Stars. Fulenwider launched her journalism career at The Paris Review, spent a decade at Vanity Fair, and has served as a judge of the Pulitzer Prizes. In 2017 Fulenwider was named to the New York State Council on Women and Girls by Governor Andrew Cuomo, and is an advisor to the UN Foundation’s Girl Up. Fulenwider graduated from Harvard University in 1995. She lives in Brooklyn with her husband and two children.",
    },
    {
      name: "Ben Lantos",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "ben_lantos",
      bio: "Ben is the COO and Co-Founder of Rhino, a company that enables consumers to rent deposit free. Prior to starting Rhino, Ben oversaw acquisitions, development and management for a private multifamily development business. Previously, Ben worked at Goldman Sachs raising capital, structuring debt, and repositioning consumer and real estate assets while executing over $10bn of related transactions. Ben received his S.B. in Mathematics from the Massachusetts Institute of Technology in 2007 and lives in Los Angeles.",
    },
    {
      name: "Ben Lewis",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "ben_lewis",
      bio: "Ben Lewis is co-founder and CEO of Little Spoon. A serial entrepreneur, Ben’s experience lies at the intersection of brands, technology and food. He has worked extensively in the organic food industry, honing a well-rounded understanding of consumer facing brands and what it takes to build them. Prior to Little Spoon, Ben built a national distribution company that acted as an incubator to up-and-coming food and beverage brands. In several years, Ben grew the company to more than $25mm in revenue, building a nimble just-in-time perishable supply chain spanning 8 regions. Through this, Ben scaled the operations of dozens of emerging brands to a national footprint and helped to pioneer trends like cold-pressed juice and cold-brew coffee, taking them from obscure, emerging concepts to household buzzwords. Ben also co-founded and later sold The Epic Seed, a Greek yogurt brand with a national footprint and a cult-like following. Ben attended the Wharton School at University of Pennsylvania.",
    },
    {
      name: "Ben Marathappu",
      title: "Operating Partner, Cera",
      team: "operating",
      img: "mahiben_maruthappu",
      bio: "Mahiben (Ben) Maruthappu is a British physician, academic researcher, health policy specialist and entrepreneur. He is the co-founder of Cera, a tech-enabled homecare company, and was the first president of the United Kingdom Medical Students' Association (UKMSA). He co-founded the National Health Service (NHS) Innovation Accelerator (NIA), a program that supports and accelerates the adoption of new healthcare treatments and technologies, and served as NHS England's Innovation Adviser to the CEO on their $100 billion of annual health spending. He has published more than 100 research papers in peer-reviewed journals. Maruthappu led the 2016 study that linked the global economic crisis to 260,000 additional cancer deaths in a group of developed countries while demonstrating the protective effect of universal health coverage. The study, published in The Lancet, was ranked as one of the most influential research papers of 2016.In November 2018, Maruthappu was named on the Financial Times' list of the 'Top 100 minority ethnic leaders in technology.'",
    },
    {
      name: "Bryan Woods",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "bryan_woods",
      bio: "Bryan Woods is the Co-Founder & CTO of Rhino. Prior to starting Rhino, Bryan spent 14 years building and scaling software products and engineering teams. He previously held Lead Software Engineer roles at PS Dept., HowAboutWe, Drop.io, & Samsung Electronics.",
    },
    {
      name: "Lisa Barnett",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "lisa_barnett",
      bio: "Lisa Barnett is the Co-Founder & President of Little Spoon, the fastest growing direct-to-consumer children’s food and nutrition company reinventing the modern parent’s experience of keeping their child healthy. She has been recognized as one of the ‘Women Changing the Food Industry’ by Well + Good, by Marie Claire as an ‘Power Woman of 2019, and by Forbes as 30 Under 30 in Venture Capital. Prior to Little Spoon, Lisa spent nearly a decade as an investor in and operator at some of the world’s top consumer brands including Estee Lauder Companies, Calvin Klein, Weight Watchers and a number of other Fortune 500 Companies. As an investor, she was focused on investing in brand-driven startups aimed at transforming the everyday life of consumers in the wellness, health and CPG space. Lisa attended the Wharton School for her MBA and the University of Pennsylvania for her undergraduate studies. She holds a Bachelors of Arts with Honors in Communication and Marketing, and graduated Phi Beta Kappa and with the Top Ivy League Scholar-Athlete Accolades as a member of the Varsity Cross Country and Track teams for 12 seasons.",
    },
    {
      name: "Michelle Muller",
      title: "Operating Partner, Little Spoon",
      team: "operating",
      img: "michelle_mueller",
      bio: "Michelle Muller is Co-founder & Chief Experience Officer at Little Spoon, the modern parent’s go-to brand for keeping their child healthy. Prior to starting Little Spoon, Michelle found inspiration in the health & wellness world, studying at the IIN where she is a certified health coach. She then became a business associate at the Ian Schrager Company. When her first of three boys was born, there was no question that he would have the best baby food available and that happened to be straight from Michelle’s kitchen. Two children and thousands of hours of cooking and pureeing later, she left her corporate job in real estate to launch Little Spoon. Michelle is often invited to speak across the US, join podcasts and further the conversation around women-led startups. Michelle graduated from The University of Texas with a BS in Communication and Government as well as a Business Foundation from The McCombs School of Business. ",
    },
    {
      name: "Monica Molenaar",
      title: "Operating Partner, Alloy",
      team: "operating",
      img: "monica_molenaar",
      bio: "Monica Molenaar is an entrepreneur, currently co-founder of a women’s health company incubated by the Kairos, where she is also an operating partner. Previously, Molenaar founded the cult specialty foods brand Seed + Mill, introducing gourmet halva and tahini to the United States and tapping into the viral trend toward plant-based and gluten-free eating. Prior to graduating from Stanford Business School, Molenaar worked in management consulting and commercial real estate. (While at Tishman Speyer Properties, she participated in the redevelopment of Rockefeller Center and the sale of the Chrysler Building.) After receiving her MBA, she became a Director of Marketing at Knoll Furniture. At the age of 40, Monica tested positive for the BRCA gene and elected to remove her ovaries prophylactically, which sent her into early menopause overnight. She quickly realized there was a need for simple, trusted solutions to this largely ignored phase of a woman’s life, and the idea for her new company was born. She graduated from Brown in 1996 and currently lives in Manhattan with her husband and two sons.",
    },
    {
      name: "Paraag Sarva",
      title: "Operating Partner, Rhino",
      team: "operating",
      img: "paraag_sarva",
      bio: "Paraag Sarva is the CEO and Co-founder of Rhino, a startup devoted to building products and services that give renters a more affordable way to live in the homes they want. Rhino replaces cash security deposits with low-cost, affordable insurance. Previously, Paraag led a real estate company, managing and developing over $100 million in assets. He also served as City Hall Policy Advisor and aide in the administration of Mayor Michael R. Bloomberg in New York City. Paraag began his career in investment banking at Goldman Sachs after completing bachelors and masters degrees in economics at New York University.",
    },
    {
      name: "Bobbi Brown",
      title: "Founder, Bobbi Brown",
      team: "advisory",
      img: "bobbi_brown",
    },
    {
      name: "David Carey",
      title: "Senior Vice President, Public Affairs and Communications",
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
    {
      name: "Esther Lee",
      title: "Chief Marketing Officer, MetLife",
      team: "advisory",
      img: "esther_lee",
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
                <Col key={idx} className="w-75" onClick={() => setModal(i.img)}>
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>

                  <Modal
                    toggle={() => setModal(null)}
                    isOpen={modal === i.img}
                    className="team-member-modal"
                    style={{zIndex: "99999999999999999999999"}}
                    data-backdrop="false"
                  >
                    <div className="bio-box">
                      <header>
                        <div className="close" onClick={() => setModal(null)}>
                          <img src={crossSmall} alt="exit modal" /> Exit
                        </div>
                      </header>
                      <main>
                        <Img fluid={data[i.img].childImageSharp.fluid} />
                        <article>
                          <p className="name faq-header">{i.name}</p>
                          <p className="title">{i.title}</p>
                          <p className="bio">{i.bio}</p>
                        </article>
                      </main>
                    </div>
                  </Modal>
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
                <Col key={idx} md="4" onClick={() => setModal(i.img)}>
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>

                  <Modal
                    toggle={() => setModal(null)}
                    isOpen={modal === i.img}
                    className="team-member-modal"
                    style={{zIndex: "99999999999999999999999"}}
                    data-backdrop="false"
                  >
                    <div className="bio-box">
                      <header>
                        <div className="close" onClick={() => setModal(null)}>
                          <img src={crossSmall} alt="exit modal" /> Exit
                        </div>
                      </header>
                      <main>
                        <Img fluid={data[i.img].childImageSharp.fluid} />
                        <article>
                          <p className="name faq-header">{i.name}</p>
                          <p className="title">{i.title}</p>
                          <p className="bio">{i.bio}</p>
                        </article>
                      </main>
                    </div>
                  </Modal>
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
                <Col key={idx} className="w-75" onClick={() => setModal(i.img)}>
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>

                  <Modal
                    toggle={() => setModal(null)}
                    isOpen={modal === i.img}
                    className="team-member-modal"
                    style={{zIndex: "99999999999999999999999"}}
                    data-backdrop="false"
                  >
                    <div className="bio-box">
                      <header>
                        <div className="close" onClick={() => setModal(null)}>
                          <img src={crossSmall} alt="exit modal" /> Exit
                        </div>
                      </header>
                      <main>
                        <Img fluid={data[i.img].childImageSharp.fluid} />
                        <article>
                          <p className="name faq-header">{i.name}</p>
                          <p className="title">{i.title}</p>
                          <p className="bio">{i.bio}</p>
                        </article>
                      </main>
                    </div>
                  </Modal>
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
                <Col key={idx} md="4" onClick={() => setModal(i.img)}>
                  <Img fluid={data[i.img].childImageSharp.fluid} />
                  <p className="mt-2 mb-1">{i.name}</p>
                  <p className="text-light-black">{i.title}</p>

                  <Modal
                    toggle={() => setModal(null)}
                    isOpen={modal === i.img}
                    className="team-member-modal"
                    style={{zIndex: "99999999999999999999999"}}
                    data-backdrop="false"
                  >
                    <div className="bio-box">
                      <header>
                        <div className="close" onClick={() => setModal(null)}>
                          <img src={crossSmall} alt="exit modal" /> Exit
                        </div>
                      </header>
                      <main>
                        <Img fluid={data[i.img].childImageSharp.fluid} />
                        <article>
                          <p className="name faq-header">{i.name}</p>
                          <p className="title">{i.title}</p>
                          <p className="bio">{i.bio}</p>
                        </article>
                      </main>
                    </div>
                  </Modal>
                </Col>
              )
            })}
        </Row>
      )}


      {/* {team
      .filter(i => i.team === "operating")
      .map((i, idx) => {
        return (
          <div key={idx} className="bio-box">
            <header></header>
            <main>
            <Img fluid={data[i.img].childImageSharp.fluid} />
              <article>
              <p className="mt-2 mb-1">{i.name}</p>
              <p className="text-light-black">{i.title}</p>
              <p className="text-light-black">{i.bio}</p>
              </article>
            </main>
          </div>
        )
      })} */}


    </Container>
  )
}
export default connect(
  state => ({ mobile: state.global.mobile }),
  null
)(AboutUs)
