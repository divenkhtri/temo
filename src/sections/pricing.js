"use client";
import { jsx, Box, Container } from "theme-ui";
import Slider from "react-slick";
import SectionHeading from "../components/section-heading";
import PriceTable from "../components/cards/price-table";
import SlickArrow from "../components/slick-arrow";
import { Fade } from "react-awesome-reveal";
import HeadingFade from "../animations/headingFade";

const data = [
  {
    id: 1,
    title: "BASIC",
    subtitle: "For the small scale team who work with small data stack",
    isRecommended: false,
    buttonText: "Get Quotation",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Process Upto 1 GB data",
      },
      {
        id: 2,
        isAvailable: true,
        title: `All Basic Connectors Availble.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Upto 5 Users Allowed`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Pick upto an 10 Dashboards`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Only Email Support Provided`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `Generative-AI Models`,
      },
    ],
  },
  {
    id: 2,
    title: "ADVANCED",
    subtitle: "For the organization who work with large data stack",
    isRecommended: true,
    buttonText: "Get Quotation",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Process Upto 10 GB data",
      },
      {
        id: 2,
        isAvailable: true,
        title: `All 10 Connectors Availble.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Upto 10 Users Allowed`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `All 50+ Dashboards`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `SSH/SSl +
        Email & Live Chat Support`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `Only Requested Addons Models`,
      },
      {
        id: 7,
        isAvailable: false,
        title: `All Generative-AI Models`,
      },
    ],
  },
  {
    id: 3,
    title: "BUSINESS",
    subtitle: "For the ultimate company team",
    isRecommended: false,
    buttonText: "Get Quotation",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Process Upto 100 GB data",
      },
      {
        id: 2,
        isAvailable: true,
        title: `All Basic Connectors Availble + Custom Connectors.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Unlimited Users`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `All 50+ Dashboards + Role Based Access Control`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `SSH/SSL +
        Email & Live Chat Support 24 * 5`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `All Generative-AI Models
        1. Menu Recommendation Model
        2. Propensity Model
        3. Promotion's Recommendation Engine`,
      },
    ],
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Pricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container sx={styles.container}>
        <HeadingFade>
          <SectionHeading
            sx={styles.heading}
            slogan="Deal for your business"
            title="Meet our pricing plan that suit you"
          />
        </HeadingFade>
        <Box sx={styles.grid}>
          {data?.map((price, index) => (
            <Box key={index} sx={styles.cardContainer}>
              <Fade
                delay={index * 200}
                duration={1000}
                direction="up"
                cascade={true}
                triggerOnce={true}
              >
                <PriceTable price={price} />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6],
  },
  container: {
    pl: 0,
    pr: 0,
  },
  heading: {
    mx: "auto",
    textAlign: "center",
    mb: [7, null, null, null, 14, null, 18],
    px: [6, null, null, 0],
    h3: {
      fontSize: [3, null, null, 10],
    },
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: [
      "100%",
      "calc(50% - 6px)",
      "calc(33.33% - 6px)",
      "calc(33.33% - 6px)",
    ],
    mb: [6, null, null, 0],
  },
};
