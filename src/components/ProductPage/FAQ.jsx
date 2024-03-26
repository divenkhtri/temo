import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "../link";
import BlockTitle from "../block-title";
import Accordion from "../accordion/accordion";
import HeadingFade from "../../animations/headingFade";

const accordionData = [
  {
    isExpanded: false,
    title: "What is RGS Data and how does it address modern data challenges?",
    contents: (
      <div>
        RGS Data is an advanced data platform tailored to tackle the
        complexities of contemporary data management and analytics. It offers
        scalable, flexible, and real-time data processing solutions, enabling
        organizations to fully leverage their data potential.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What's included in my Free Trial?",
    contents: (
      <div>
        Every user/org who signs up is eligible for a free trial to experience
        the platform for 30 days. The user will be able to experience most of
        the elements of the “Business” plan, except for a few capabilities, as
        shown in the Pricing page. Please refer to the FAQ section for the
        definition of the terms.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "How do I get started?",
    contents: (
      <div>
        Send us your rerquired via Contact Page and you can get started after
        that.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What are the key benefits of using RGS Data Platform?",
    contents: (
      <div>
        RGS Data Platform offers a range of key benefits including:
        <ul>
          <li>Seamless integration with diverse data sources.</li>
          <li>
            Scalable and secure data storage for both structured and
            unstructured data.
          </li>
          <li>
            Distributed processing capabilities for efficient data
            transformation and analysis.
          </li>
          <li>
            Advanced analytics and machine learning features for actionable
            insights and predictive analytics.
          </li>
          <li>
            Intuitive data visualization tools for effective communication of
            data findings.
          </li>
          <li>
            Robust data governance and security measures to ensure compliance
            and data privacy.
          </li>
        </ul>
        These features collectively empower organizations to streamline their
        data management processes and derive valuable insights to drive business
        growth.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Is RGS Data platform suitable for small businesses?",
    contents: (
      <div>
        Yes, RGS Data platform caters to businesses of all sizes, including
        small and medium enterprises (SMEs). Our platform offers flexible
        pricing plans and scalable solutions that can be tailored to meet the
        specific needs and budget constraints of small businesses.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "Can I integrate RGS Data platform with my existing data infrastructure?",
    contents: (
      <div>
        Absolutely! RGS Data platform is designed to seamlessly integrate with
        existing data infrastructure. Whether you're using databases, APIs,
        cloud storage, or other data sources, our platform offers robust
        integration capabilities to ensure smooth data flow and
        interoperability.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What kind of support do you offer to users?",
    contents: (
      <div>
        We provide comprehensive support to our users, including documentation,
        tutorials, and technical assistance. Our dedicated support team is
        available to address any queries, troubleshoot issues, and provide
        guidance on using the platform effectively. Additionally, we offer
        regular updates and enhancements to improve the user experience.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Is my data secure on the RGS Data platform?",
    contents: (
      <div>
        Yes, ensuring the security and privacy of your data is our top priority.
        RGS Data platform employs robust security measures, including
        encryption, access controls, and compliance certifications, to safeguard
        your data against unauthorized access, breaches, and other threats. We
        adhere to industry best practices and regulatory standards to maintain
        the integrity and confidentiality of your data.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "Can I customize the RGS Data platform to fit my specific business needs?",
    contents: (
      <div>
        Yes, RGS Data platform offers extensive customization options to
        accommodate your unique business requirements. From configuring data
        pipelines to creating custom data models and dashboards, our platform
        provides flexibility and scalability to adapt to your evolving needs.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What level of scalability does the RGS Data platform offer?",
    contents: (
      <div>
        The RGS Data platform is built to scale effortlessly, allowing you to
        handle large volumes of data and accommodate growing business demands.
        Whether you're processing millions of records or scaling your analytics
        workload, our platform can seamlessly scale up or down to meet your
        performance and capacity requirements.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "How does RGS Data platform ensure data reliability and consistency?",
    contents: (
      <div>
        RGS Data platform implements robust data reliability and consistency
        mechanisms to ensure the accuracy and integrity of your data. Through
        features such as data validation, error handling, and transaction
        management, our platform minimizes data inconsistencies and ensures
        reliable data processing and analysis.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Does RGS Data platform support real-time data processing?",
    contents: (
      <div>
        Yes, RGS Data platform offers real-time data processing capabilities to
        support time-sensitive business needs and applications. Whether you're
        monitoring IoT devices, analyzing streaming data, or performing
        real-time analytics, our platform provides the tools and infrastructure
        to process and act on data in real-time.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What industries can benefit from using RGS Data platform?",
    contents: (
      <div>
        RGS Data platform is versatile and can benefit a wide range of
        industries including but not limited to finance, healthcare, e-commerce,
        telecommunications, manufacturing, and advertising. Regardless of your
        industry, if you deal with data, RGS Data platform can help you
        streamline your data management and analytics processes to drive better
        business outcomes.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Can I access RGS Data platform from mobile devices?",
    contents: (
      <div>
        Yes, RGS Data platform is accessible from various devices including
        desktop computers, laptops, tablets, and mobile phones. We offer a
        responsive web interface that adapts to different screen sizes, ensuring
        a seamless user experience across devices.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "Does RGS Data platform provide data backup and disaster recovery features?",
    contents: (
      <div>
        Yes, data backup and disaster recovery are integral features of RGS Data
        platform. We employ robust backup mechanisms and disaster recovery
        protocols to ensure the safety and availability of your data in the
        event of unforeseen incidents such as system failures, natural
        disasters, or cyberattacks.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What is the pricing model for RGS Data platform?",
    contents: (
      <div>
        RGS Data platform offers flexible pricing plans tailored to meet the
        needs and budget constraints of businesses of all sizes. Our pricing is
        based on factors such as usage, data volume, and additional features. We
        offer transparent pricing with no hidden fees, and you can choose a plan
        that best fits your requirements. For detailed pricing information,
        please visit our Pricing page or contact our sales team.
      </div>
    ),
  },
];
const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={{ marginTop: "5rem" }}>
      <Container>
        <HeadingFade>
          <BlockTitle
            title="Frequently Ask Question"
            text="Ask your question and meet"
          />
        </HeadingFade>
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>

          <Box sx={styles.content}>
            <HeadingFade>
              <Heading as="h3">
                Do you have any quesiton? Please ask here we ready to support
              </Heading>
            </HeadingFade>
            <HeadingFade delay={500}>
              <Text as="p">
                If your question is not list here, please feel free to make a
                manual support.
              </Text>
            </HeadingFade>
            <HeadingFade delay={1000}>
              <Link sx={styles.askButton} path="/Contact/page">
                Ask your Question
              </Link>
            </HeadingFade>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["60px", null, null, null, "90px", null, "10px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
