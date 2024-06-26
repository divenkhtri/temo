/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { useState } from "react";
import { rgba } from "polished";
import { jsx, Flex, Container, Heading, Text, Button } from "theme-ui";
import Image from "../components/image";
import Play from "../components/icons/play";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

const ModalVideo = dynamic(
  () => {
    return import("react-modal-video");
  },
  { ssr: false }
);

const Banner = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div sx={styles.content}>
            <Heading as="h1">
              Industry Specific Business Intelligence and Gen AI Cloud Data
              Platform
            </Heading>
            <Text as="p">Unlock the Power of Your Data</Text>
            <Flex sx={styles.buttonGroup}>
              <Link href="/Contact/page">
                <Button variant="primary" sx={styles.btnPrimary}>
                  Contact Us
                </Button>
              </Link>
              <Button
                variant="outlined"
                sx={styles.btnOutlined}
                onClick={handleClick}
              >
                Discover video <Play fill="white" />
              </Button>
            </Flex>
          </div>
        </motion.div>
        <motion.figure
          as="figure"
          sx={styles.illustration}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={"/images/banner.png"}
            alt="banner"
          />
        </motion.figure>
        <ModalVideo
          channel="custom"
          isOpen={videoOpen}
          url="https://storage.googleapis.com/rgs-tech-website-video-files/updated.mp4"
          onClose={() => setVideoOpen(false)}
        />
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: "#02162D",
    // pt: [8, null, null, null, 10, 14],
    // pb: [8, null, null, null, 10, 14],
    position: "relative",
    zIndex: 0,
    "::before": {
      backgroundColor: "white",
      content: `''`,
      position: "absolute",
      height: [30, null, null, 70, 85, 120],
      bottom: 0,
      width: "100%",
      zIndex: -1,
    },
  },
  container: {
    minHeight: [null, null, null, null, null, "100vh"],
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  content: {
    maxWidth: [null, null, null, 570, 690],
    textAlign: "center",
    marginTop: [18, null, null, 22, 180],
    h1: {
      color: "white",
      fontSize: [7, null, null, 12, 14],
      lineHeight: 1.35,
    },
    p: {
      color: rgba("white", 0.8),
      fontSize: [3, null, null, 5],
      marginTop: [3, null, null, 6],
    },
  },
  buttonGroup: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: [6, null, null, 8],
    position: "relative",
    zIndex: 2,
    button: {
      px: ["12px", null, null, "18px"],
    },
  },
  btnPrimary: {},
  btnOutlined: {
    borderColor: rgba("white", 0.25),
    color: "white",
    ml: 3,
    svg: {
      ml: 2,
    },
  },
  illustration: {
    transform: ["scale(1.20)", null, null, "none"],
    alignItems: "center",
    display: "flex",
    marginTop: [2, null, null, -4, -5],
  },
};
