/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import ProductSectionHeader from "./components/product-section-header";
import { Fade } from "react-awesome-reveal";
import HeadingFade from "../../animations/headingFade";
import Image from "../image";

const data = [
  {
    id: 1,
    title: "Data Ingestion",
    text: "Seamless integration with diverse data sources including databases, APIs, streaming platforms, and cloud storage.",
  },
  {
    id: 2,
    title: "Data Transformation",
    text: "Distributed processing capabilities using GCP tools for efficient data transformation and analysis.",
  },
  {
    id: 3,
    title: "Data Consumption",
    text: "Advanced analytics and machine learning capabilities for gaining actionable insights and predictive analytics.",
  },
  {
    id: 4,
    title: "Data Analytics & Visualization",
    text: "Intuitive and interactive visualizations to explore and communicate data findings effectively.",
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <HeadingFade>
          <ProductSectionHeader
            title="Easily generate your data insights in one click"
            isWhite={true}
          />
        </HeadingFade>

        <HeadingFade delay={400}>
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </HeadingFade>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    height: "100%",
    mt: 15,
    backgroundColor: "primary",
    backgroundImage: `url(${"/images/workflow/patternBG.png"})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      background:
        "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 50px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 200,
      height: 60,
      opacity: 0.3,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${"/images/workflow/arrowOdd.png"})`,
      animation: "moveArrow 2s linear infinite",
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${"/images/workflow/arrowEven.png"})`,
      top: 8,
      animation: "moveArrow 2s linear infinite",
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      height: "4rem",
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
  },

  "@keyframes moveArrow": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
};
