"use client";
import { useState } from "react";
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "../section-heading";
import Image from "../image";
import { LearnMore } from "../link";

import Modal, { CloseButton } from "../modal/modal";
import ResponsiveIframe from "../responsive-iframe";

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="section" sx={{ height: "100vh", marginTop: '5rem', marginBottom: '8rem' }} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="All in one platform for you day to day operation management"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
        />
        <Box sx={styles.explore}>
          <LearnMore path="/Pricing/page" label="Check Pricing" />
        </Box>
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
    h2: {
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
