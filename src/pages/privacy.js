import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import { Container, Row, Col } from "reactstrap"

const PrivacyPage = ({ location }) => {
  let pageColor = "salmon"
  let borderColor = "site-border-black"
  return (
    <Layout
      path={location.pathname}
      borderColor={borderColor}
      footerColor={pageColor}
    >
      <SEO title="Privacy Policy" />
      <Container fluid id="privacyPage" className="page-template">
        <Row className="d-flex justify-content-center">
          <Col md="10" className="">
            <h1>Privacy Policy</h1>
            <p className="bold">
              This Privacy Notice was last updated July 08, 2020
            </p>
            <p>
              This Privacy Notice applies to personal data collected on our
              website kairoshq.com (“Website”). This Privacy Notice sets out the
              categories of personal data we collect from you, how we collect
              it, what we use it for and with whom we share it in accordance
              with the General Data Protection Regulation (EU) 2016/679
              (“GDPR”). For the purposes of this Privacy Notice, “Kairos”, “we”,
              “us”, and “our” means Kairos Capital LLC and Kairos Thematic
              Trust.
            </p>
            <p>
              By “personal data” we mean any information relating to you such as
              your name, contact details, taxpayer identification number,
              account number, account balance and transaction information or
              online identifiers such as your IP address. Personal data does not
              include data where you can no longer be identified from it such as
              anonymized aggregate data.
            </p>
            <p>
              Kairos is a data controller. This means that we are responsible
              for deciding how we hold and use personal data about you. If you
              have any questions about this Privacy Notice or how we handle your
              personal data, please contact us at info@Kairoscap.com.
            </p>
            <p>
              This Privacy Notice applies to personal data about you that we
              collect, use and otherwise process in connection with your
              relationship with us as a user of the Website.
            </p>
            <p>
              We may provide supplemental privacy notices on specific occasions
              when we are collecting or processing personal data about you so
              that you are fully aware of how and why we are using your personal
              data. Those supplemental notices should be read together with this
              Privacy Notice.
            </p>
            <p className="bold">
              What personal data do we collect about you and what do we use it
              for?
            </p>
            <p>
              The categories of personal data about you which we may collect,
              store and use are set out in the table below and in each case we
              have indicated what we use your personal data for and our ‘lawful
              basis’ for processing it. The law specifies certain ‘lawful bases’
              under which we are allowed to use your personal data. Most
              commonly, we will rely on one or more of the following lawful
              bases for processing your personal data: Where we need to comply
              with a legal obligation;
            </p>
            <p>
              Where it is necessary for our legitimate interests (or those of a
              third party) and your interests and fundamental rights do not
              override those interests; and/or
            </p>
            <p>Where we have obtained your consent.</p>
            <p>
              We may rely on your consent as a lawful basis for processing your
              personal data. You have the right to withdraw consent at any time
              by contacting us at the details given at the beginning of this
              notice.
            </p>
            <p>
              We also collect, use and share aggregated data such as statistical
              or demographic data for any purpose. Aggregated data may be
              derived from your personal data but is not considered personal
              data itself as it can no longer be used to identify you. For
              example, we may aggregate your browsing information data to
              calculate the percentage of our users interested in a specific
              product type. However, if we combine or connect aggregated data
              with your personal data so that it can be used to identify you, we
              treat the combined data as personal data which will be used in
              accordance with this Privacy Notice.
            </p>
            <p>
              Please note that we may process your personal data without your
              knowledge or consent, in compliance with the above rules, if we
              are required by law to do so or if we reasonably believe that it
              is necessary to protect our rights and/or to comply with judicial
              or regulatory proceedings, a court order or other legal process.
            </p>
            <p className="bold">How do we collect your personal data?</p>
            <p>We may collect personal data about you:</p>
            <ul>
              <li>
                When you submit your information on our Website through our
                collection forms
              </li>
              <li>
                When you request literature or research information from us
              </li>
              <li>When you visit our Website</li>
              <li>When you attend our webinar presentations</li>
              <li>When you attend other Kairos-hosted events</li>
              <li>When we send you emails</li>
              <li>
                We may also automatically collect certain data when you interact
                with our Website, such as technical data about your equipment,
                browsing actions and patterns. We collect this personal data by
                using cookies, server logs and other similar technologies.
              </li>
            </ul>
            <p>
              In addition, we may receive personal data about you from third
              parties and public sources, such as:
            </p>
            <ul>
              <li>
                Companies contracted by us to provide services to you, such as
                our webinar service provider
              </li>
              <li>
                Companies contracted by us to offer or market our sales
                materials to you, such as our sales affiliates and external
                sales partners
              </li>
              <li>
                Our marketing service provider, who combines data you provide on
                our Website with other publicly available data about you, such
                as your social media account information
              </li>
            </ul>
            <p className="bold">With whom do we share your personal data?</p>
            <p>
              We may share your personal data with third parties where this is
              required by law, where you have consented, or where we have
              another legitimate interest in doing so.
            </p>
            <p>We may share your personal data with:</p>
            <ul>
              <li>
                Our service providers, including our attorneys, our IT service
                providers, our webinar service provider and our marketing
                service provider
              </li>
              <li>Our sales affiliates and external sales partners</li>
              <li>
                Other entities in our group for advertising and marketing
                purposes, in the context of a business reorganization or group
                restructuring exercise, for system maintenance support and for
                hosting of data
              </li>
              <li>
                A regulator or government entity if we are required by law to do
                so or if we reasonably believe that disclosure is necessary to
                protect our rights and/or to comply with judicial or regulatory
                proceedings, a court order or other legal process
              </li>
            </ul>
            <p className="bold">
              What if you do not provide the personal data we request?
            </p>
            <p>
              If you do not provide us with certain personal data when
              requested, we may not be able to provide you with the services or
              products you have requested.
            </p>
            <p className="bold">Change of purpose</p>
            <p>
              We will only use your personal data for the purposes for which we
              collected it (as identified above in the What we use this personal
              data for column), unless we reasonably consider that we need to
              use it for another reason which is compatible with the original
              purpose for which you provided it to us. If we need to use your
              personal data for a purpose that is unrelated to the original
              purpose for which you provided it to us, we will notify you and we
              will explain the legal basis which allows us to do so.
            </p>
            <p className="bold">“Do Not Track” Signals</p>
            <p>
              Some web browsers may transmit “do not track” signals to the
              Website and other online services with which the browser
              communicates. There is no standard that governs what, if anything,
              Website should do when they receive these signals. We currently do
              not take action in response to these signals. If and when a
              standard for responding is established, we may revisit our policy
              on responding to these signals.
            </p>
            <p className="bold">
              Processing of your personal data outside the EEA
            </p>
            <p>
              Kairos Capital LLC and Kairos Thematic Trust are U.S.
              organizations that do not have affiliates or offices in the EU.
              Our marketing partners and sales affiliates are also U.S.
              organizations that do not have affiliates or offices in the EU.
            </p>
            <p>
              The personal data we collect about you will be transferred
              directly by you to us, our service providers or our sales
              affiliates outside of the EEA. It is therefore necessary for us to
              process your personal data outside of the EEA for the performance
              of our contract with you. We have put in place physical,
              electronic and procedural safeguards that are reasonably designed
              to protect your personal data from unauthorized access and use in
              order to ensure that your personal data is treated in a manner
              that is consistent with and which respects the EU laws on data
              protection. If you require further information about the transfer
              of your personal data outside of the EEA, you can request it from
              info@Kairoscap.com.
            </p>
            <p className="bold">How long will we retain your personal data?</p>
            <p>
              We will only retain your personal data for as long as necessary to
              fulfill the purposes we collected it for, including for the
              purposes of satisfying any legal, regulatory, accounting or
              reporting requirements.
            </p>
            <p>
              To determine the appropriate retention period for personal data,
              we consider the amount, nature, and sensitivity of the personal
              data, the potential risk of harm from unauthorised use or
              disclosure of your personal data, the purposes for which we
              process your personal data and whether we can achieve those
              purposes through other means, and the applicable legal
              requirements.
            </p>
            <p>
              In some circumstances, we may anonymize your personal data so that
              it can no longer be associated with you, in which case it is no
              longer personal data.
            </p>
            <p>
              Once we no longer require your personal data for the purposes we
              collected it for, we will securely destroy your personal data in
              accordance with applicable laws and regulations.
            </p>
            <p className="bold">Accuracy of personal data</p>
            <p>
              It is important that the personal data we hold about you is
              accurate and current. Please let us know if your personal data
              changes during your relationship with us.
            </p>
            <p className="bold">
              Your rights in relation to your personal data
            </p>
            <p>
              You have rights as an individual which you can exercise in
              relation to the information we hold about you under certain
              circumstances. These rights are to:
            </p>
            <ul>
              <li>
                Request access to your personal data (commonly known as a “data
                subject access request”) and request certain information in
                relation to its processing;
              </li>
              <li>Request rectification of your personal data;</li>
              <li>Request the erasure of your personal data;</li>
              <li>
                Request the restriction of processing of your personal data;
              </li>
              <li>Object to the processing of your personal data;</li>
              <li>
                Request the transfer of your personal data to another party.
              </li>
              <li>
                If you want to exercise any of these rights please contact us at
                info@Kairoscap.com.
              </li>
            </ul>
            <p>
              You also have the right to make a complaint at any time to an EU
              data protection authority (“DPA”). However, it is possible that we
              could resolve your concerns directly if you contact us first, so
              please consider doing so.
            </p>
            <p>
              While we strive to protect all information we receive from you, we
              cannot guarantee the security of any information you transmit to
              us.
            </p>
            <p className="bold">Fees</p>
            <p>
              You will not usually have to pay a fee to access your personal
              data (or to exercise any of the other rights). However, we may
              charge a reasonable fee if your request for access is manifestly
              unfounded or excessive. Alternatively, we may refuse to comply
              with the request in such circumstances.
            </p>
            <p className="bold">What we may need from you</p>
            <p>
              We may need to request specific information from you to help us
              confirm your identity and ensure your right to access the
              information (or to exercise any of your other rights). This is
              another appropriate security measure to ensure that personal data
              is not disclosed to any person who has no right to receive it.
            </p>
            <p className="bold">Your right to withdraw your consent</p>
            <p>
              In the limited circumstances where you may have provided your
              consent to the collection, processing and transfer of your
              personal data for a specific purpose, you have the right to
              withdraw your consent for that specific processing at any time. To
              withdraw your consent, please contact us at info@Kairoscap.com or
              update your marketing profile by clicking the preference link in
              one of Kairos’s marketing emails. Once we have received
              notification that you have withdrawn your consent, we will no
              longer process your information for the purpose(s) you originally
              agreed to unless we otherwise have an alternative legal basis for
              doing so.
            </p>
            <p className="bold">Changes to this privacy notice</p>
            <p>
              We reserve the right to update this privacy notice at any time,
              and we will make an updated copy of such privacy notice available
              on our Website and notify you when we make any substantial
              updates. We may also notify you in other ways from time to time
              about the processing of your personal data.
            </p>
            <h2>Additional Information</h2>
            <p className="bold">Data Security</p>
            <p>
              We have implemented measures that are reasonably designed to
              secure your personal data from accidental loss and from
              unauthorized access, use, alteration and disclosure.
            </p>
            <p className="bold">Children Under the Age of 13</p>
            <p>
              Our Website are not intended for children under 13 years of age.
              No one under age 13 may provide any personal data to or on the
              Website. We do not knowingly collect personal data from children
              under 13. If you are under 13, do not use or provide any
              information on the Website or on or through any of its
              features/register on the Website, make any purchases through the
              Website, use any of the interactive or public comment features of
              this Website or provide any information about yourself to us,
              including your name, address, telephone number, e-mail address or
              any screen name or user name you may use. If we learn we have
              collected or received personal data from a child under 13 without
              verification of parental consent, we will delete that information.
              If you believe we might have any information from or about a child
              under 13, please contact us at info@Kairoscap.com.
            </p>
            <p className="bold">California Privacy Rights</p>
            <p>
              If you are a California resident, you may have certain additional
              rights. California Civil Code Section 1798.83 permits you to
              request information regarding the disclosure of your personal data
              by us to third parties for the third parties’ direct marketing
              purposes. To make such a request, please write, call or send an
              email to the below contact information.
            </p>
            <p className="bold">Contact Information</p>
            <p>
              This Privacy Notice was written with brevity and clarity in mind
              and is not an exhaustive account of all aspects of our collection
              and use of personal data. If you require any further information,
              please do not hesitate to contact us at info@kairoshq.com.
            </p>
            <p className="bold">31 Bond Street, New York NY 10012</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PrivacyPage
