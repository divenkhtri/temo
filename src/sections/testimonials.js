/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading } from "theme-ui";
import Slider from "react-slick";
import Testimonial from "../components/cards/testimonial";

import { rgba } from "polished";

const data = [
  {
    id: 1,
    author: "/images/clients/database.svg",
    logo: "Unable to manage large data",
    text: `Organizations today struggle to efficiently manage and derive insights from the increasing volume, variety, and velocity of data.`,
    authorName: "Karolin Astaize",
    designation: "Vice President - Talent & Acquisition",
  },
  {
    id: 2,
    author: "/images/clients/desktop.svg",
    logo: "Traditional data processing",
    text: `Traditional data processing approaches are unable to keep up with the scale and complexity of modern data requirements.`,
    authorName: "Karolin Astaize",
    designation: "Vice President - Talent & Acquisition",
  },
  {
    id: 3,
    author: "images/clients/secretary.png",
    logo: "Multiple application to manage operations",
    text: `Businesses need a robust data platform that can handle big data challenges and enable them to unlock the full potential of their data.`,
    authorName: "Karolin Astaize",
    designation: "Vice President - Talent & Acquisition",
  },
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <Box sx={styles.heading}>
          <Heading as="h2" variant="heading" sx={styles.headingText}>
            Addressing Key Data Challenges in the Restaurant Industry
          </Heading>
        </Box>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, 10, 14],
    mt: 12
  },
  heading: {
    textAlign: "center",
    mb: 10,
  },
  headingText: {
    fontSize: [7, null, null, 8],
    fontWeight: "bold",
    color: '#000',
    mb: 3,
  },
  slider: {
    ".slick-list": {
      // mx: [null, null, null, null, -2, 0],
    },
    ".slick-slide": {
      // mr: [null, null, null, null, 4, 0],
    },
    ".slick-dots": {
      display: "flex !important",
      margin: 0,
      padding: 0,
      listStyle: "none",
      alignItems: "center",
      justifyContent: "center",
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: "flex",
      },
      button: {
        backgroundColor: rgba("#2D3D50", 0.15),
        borderRadius: 50,
        border: 0,
        cursor: "pointer",
        padding: 0,
        overflow: "hidden",
        textIndent: "-9999em",
        width: 10,
        height: 6,
        outline: 0,
        transition: "all 0.3s ease-in-out 0s",
      },
      ".slick-active button": {
        backgroundColor: rgba("#2D3D50", 0.4),
        width: 20,
      },
    },
  },
};
