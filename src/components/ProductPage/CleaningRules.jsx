"use client";
import { jsx, Box, Container, Text } from "theme-ui";
import SectionHeading from "../section-heading";
import Feature from "../cards/product-features";
import Image from "../image";
import { LearnMore } from "../link";

import { Fragment } from "react";

const data = [
  {
    id: 1,
    color: "#28D1DC",
    value: "80K+",
    title: "We have more than customers",
  },
  {
    id: 2,
    color: "#FF753A",
    value: "150+",
    title: "Free online tutorials videos available",
  },
  {
    id: 3,
    color: "#FA578E",
    value: "90+",
    title: "Daily updated blog post maintain",
  },
  {
    id: 4,
    color: "#28DCB2",
    value: "& 3M",
    title: "Job posted everyday`s with  qualification",
  },
];

const CleaningRules = () => {
  return (
    <Box as="section" variant="section.features">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  Smart Jackpots <br />
                  that you may love this anytime &amp; anywhere
                </Fragment>
              }
              description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />
            <Text sx={styles.listItem} as="p">
              <Image
                src={"/images/icons/check-circle-filled.png"}
                alt="check icon"
              />
              Unlimited design possibility
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image
                src={"/images/icons/check-circle-filled.png"}
                alt="check icon"
              />
              Completely responsive features
            </Text>
            <Box sx={styles.explore}>
              <LearnMore path="#!" label="Contact Us" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CleaningRules;

const styles = {
  contentWrapper: {
    height: '100vh',
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ["flex", "flex", "grid"],
    flexDirection: ["column-reverse", "column-reverse", "unset"],
    gridTemplateColumns: [
      "1.2fr 0.8fr",
      "1.2fr 0.8fr",
      "1.2fr 0.8fr",
      "1.1fr 0.9fr",
      "1.1fr 0.9fr",
      "1.1fr 0.9fr",
      "1.2fr 0.8fr",
    ],
    alignItems: "center",
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ["grid", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "flex-start",
    "> div": {
      ":first-of-type": {
        mt: ["65px"],
      },
      ":last-of-type": {
        mt: ["-65px"],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: "left",
    mb: ["20px"],
    mt: [0, 0, "-70px"],
    h2: {
      fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
      lineHeight: [1.25, 1.5],
      letterSpacing: "-1.5px",
      br: {
        display: ["none", "none", "none", "block"],
      },
    },
    p: {
      mt: ["15px", "10px"],
    },
  },
  listItem: {
    fontWeight: 800,
    lineHeight: 2.81,  
    display: "flex",
    alignItems: "center",
    img: {
      mr: "10px",
    },
  },
  explore: {
    mt: ["20px", "20px", "20px", "20px", "40px"],
  },
};
