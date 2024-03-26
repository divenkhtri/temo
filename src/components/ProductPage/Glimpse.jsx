/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "../section-heading";
import Accordion from "./accordion/accordion";
import LeftFade from "../../animations/leftFade";
import { Fade } from "react-reveal";
import HeadingFade from "../../animations/headingFade";

const data = [
  {
    title: "We harmonize your data ",
    contents: (
      <div>
        Validate, Transform and bring your data in harmony to utilize it for
        analtically process generating useful insights
      </div>
    ),
  },
  {
    title: "Get your data health report",
    contents: (
      <div>
        Monitor and Check your data quality report and how the data's quality
        improves after using the platform
      </div>
    ),
  },
  {
    title: `Easy to use platform`,
    contents: (
      <div>
        With just one click you can generate your data insights, track realtime
        data update and much more.
      </div>
    ),
  },
];

const Glimpse = () => {
  return (
    <HeadingFade>
      <Box as="section" sx={styles.section}>
        <Box
          as="figure"
          sx={{
            ...styles.illustration,
            background: `url(${"/images/homescreen.png"}) no-repeat`,
          }}
        />
        <Container sx={styles.container}>
          <Box sx={styles.accordionGroup}>
            <SectionHeading
              sx={styles.heading}
              slogan="ALL-IN-ONE RGS Data Platform"
              title="Meet our premium features that will make you wow"
              description="Build an incredible workplace and grow your business with RGS, the all-in-one platform for making data ready for analyticaly and Gen-AI process."
            />
            <Accordion items={data} />
          </Box>
        </Container>
      </Box>
    </HeadingFade>
  );
};

export default Glimpse;

const styles = {
  section: {
    height: "100%",

    mt: 10,
    pb: [12, null, null, null, null, 14, 18],
    // marginBottom: [null, null, null, null, null, null, '-85px'],
    position: "relative",
    zIndex: 0,
  },
  container: {
    display: ["flex"],
    alignItems: ["flex-start"],
    justifyContent: "flex-end",
  },
  illustration: {
    backgroundSize: [null, null, null, null, null, "62%", "50%", "66%", "62%"],
    "@media only screen and (min-width: 1601px)": {
      backgroundPosition: "0 0",
    },
    backgroundPosition: [
      null,
      null,
      null,
      null,
      null,
      "-80px 0",
      null,
      null,
      "0 0",
      "-140px 0px",
    ],
    bottom: 0,
    display: ["none", null, null, null, null, "block"],
    height: "100%",
    left: 0,
    position: "absolute",
    width: "100%",
  },
  accordionGroup: {
    maxWidth: [null, null, null, 520, 610, 410, null, 450, 410],
    m: [null, null, null, "0 auto", null, "0", null],
    // marginLeft: [null, null, null, 'auto', null, 10, 12, 16],
    // marginRight: [null, null, null, 'auto', null, 'unset'],
    // px: [6, null, null, null, 0],
  },
  heading: {
    textAlign: ["center", null, null, null, null, "left"],
    maxWidth: [null, null, null, 440, 450, "none"],
    mb: [null, null, null, null, 6, 4, 6],
    h3: {
      fontSize: [4, null, null, 8, 10, 8, 12],
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "heading",
      maxWidth: [250, null, null, "none"],
      margin: ["0 auto", null, null, "unset"],
    },
  },
};
