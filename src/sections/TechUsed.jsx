/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx, Box, Button, Container, Image } from "theme-ui";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import HeadingFade from "../animations/headingFade";
import SectionHeading from "../components/section-heading";

const clients = [
  {
    id: 1,
    name: "Apache Beam",
    logo: "/images/techused/apachesbeam.svg",
  },
  {
    id: 2,
    name: "Google Cloud Platform",
    logo: "/images/techused/gcp.svg",
  },
  {
    id: 3,
    name: "Terraform",
    logo: "/images/techused/terraform.svg",
  },
  {
    id: 4,
    name: "Next-JS",
    logo: "/images/techused/nextjs.svg",
  },
  {
    id: 5,
    name: "Material-UI",
    logo: "/images/techused/materialUI.svg",
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === "prev" ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const TechUsed = () => {
  const settings = {
    slidesToShow: 5,
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
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="clients" sx={styles.section}>
      <Box>
        <Container>
          <HeadingFade cascade fraction={0} triggerOnce={false}>
            <Box>
              <SectionHeading
                sx={styles.heading}
                slogan="A data platform with latest technology to deal with today's data "
                title="Our robust technology stack"
              />
            </Box>
          </HeadingFade>
          <Slider sx={styles.clients} {...settings}>
            {clients?.map((client) => (
              <Box key={client.id} as="figure" sx={styles.logo}>
                <Fade
                  delay={client * 700}
                  duration={1500}
                  direction="up"
                  cascade={true}
                  fraction={0}
                  triggerOnce={false}
                >
                  <Image
                    loading="lazy"
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={150}
                  />
                </Fade>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </section>
  );
};

export default TechUsed;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
  },
  heading: {
    mx: "auto",
    textAlign: "center",
    color: "heading",
    fontWeight: [500, null, null, 700],
    fontSize: [5, null, 6, 10],
    lineHeight: [1.33, 1.33, 2.08],
    letterSpacing: [null, null, null, "heading"],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    pt: [0, 0, 25, 25, 25, 6],
    "&.slick-slider": {
      marginBottom: "40px",
    },
    ".slick-track": {
      display: "flex",
      alignItems: "center",
    },
  },
  logo: {
    display: "flex !important",
    justifyContent: "center",
    mx: "10px",
    ":focus": {
      outline: "none",
    },
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  paginationButton: {
    minHeight: "30px",
    padding: 0,
    position: "absolute",
    bottom: "-60px",
    ":focus": {
      outline: "0 none",
    },
    svg: {
      transition: "all 0.2s ease-in-out 0s",
    },
    "&.slick-disabled": {
      color: "#BBC7D7",
      svg: {
        transform: "scale(0.8)",
      },
    },
    "&.slick-prev": {
      left: "calc(50% - 16px)",
      transform: "translateX(-50%)",
    },
    "&.slick-next": {
      transform: "translateX(50%)",
      right: "calc(50% - 16px)",
    },
  },
};
