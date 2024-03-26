"use client";
import { Fragment, useState } from "react";
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "../section-heading";
import Image from "../image";
import { LearnMore } from "../link";

import Modal, { CloseButton } from "../modal/modal";
import ResponsiveIframe from "../responsive-iframe";
import HeadingFade from "../../animations/headingFade";
import Head from "next/head";

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      as="section"
      sx={{ marginTop: "15rem", marginBottom: "4rem" }}
      variant="section.introVideo"
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title={
            <HeadingFade>
              <Fragment>
                All in one platform for you day to day operation management
              </Fragment>
            </HeadingFade>
          }
          description={
            <HeadingFade delay={500}>
              <Fragment>
                From Ingesting a vast quantity of first-party user data to
                generating a wealth of insights from that data, and train models
                to respond to users’ needs and preferences. The RGS Data
                Platform, the robustness and quality of data platform directly
                impact the success and ability to drive powerful experiences for
                your business and customers
              </Fragment>
            </HeadingFade>
          }
        />
        <HeadingFade delay={700}>
          <Box sx={styles.explore}>
            <LearnMore path="/Pricing/page" label="Check Pricing Now" />
          </Box>
        </HeadingFade>
        <HeadingFade delay={900}>
          <Box sx={styles.videoWrapper}>
            <Modal isOpen={isOpen}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="26px"
                color="#000"
              />
              <ResponsiveIframe
                src="https://storage.googleapis.com/rgs-tech-website-video-files/updated.mp4"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </Modal>

            <Image
              src={"/images/videopic.png"}
              className="video-banner"
              alt="video banner"
            />
            <Button
              variant="text"
              sx={styles.playPause}
              onClick={() => setIsOpen(true)}
            >
              <Image src={"/images/icons/play.png"} alt="play" />
              Watch Full video
            </Button>
          </Box>
        </HeadingFade>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  heading: {
    maxWidth: "auto",
    mb: [5],
    textAlign: "center",
    fontSize: 4,
    h1: {
      letterSpacing: "heading",
    },
  },
  explore: {
    textAlign: ["center"],
    mb: [6],
  },
  videoWrapper: {
    textAlign: "center",
    position: "relative",
    ".video-banner": {
      maxWidth: ["100%", "100%", "100%", "100%", "100%", "80%", "100%"],
    },
  },
  playPause: {
    color: "white",
    fontWeight: 700,
    position: "absolute",
    padding: "0px",
    bottom: [40, 40, 40, 70, 100],
    left: "50%",
    transform: "translateX(-50%)",
    ":focus": {
      outline: 0,
    },
    img: {
      mr: "16px",
    },
  },
};
