"use client";
import React from "react";
import { Box, Container, Image, Heading } from "theme-ui";
import { keyframes } from "@emotion/react";
import HeadingFade from "../../animations/headingFade";

const HeroBanner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
        <Image
          sx={styles.bannerIcon1}
          className="bannerIcon"
          alt="banner icon"
          src={"/images/banner/banner-icon-1-1.svg"}
        />
        <Image
          sx={styles.bannerIcon2}
          className="bannerIcon"
          alt="banner icon"
          src={"/images/banner/banner-icon-1-2.svg"}
        />
        <Image
          sx={styles.bannerIcon3}
          className="bannerIcon"
          alt="banner icon"
          src={"/images/banner/banner-icon-1-3.svg"}
        />
        <Image
          sx={styles.bannerIcon4}
          className="bannerIcon"
          alt="banner icon"
          src={"/images/banner/banner-icon-1-4.svg"}
        />
        <Image
          sx={styles.bannerIcon5}
          className="bannerIcon"
          alt="banner icon"
          src={"/images/banner/banner-icon-1-5.svg"}
        />
        <Image
          sx={styles.bannerIcon6}
          className="bannerIcon"
          alt="banner icon"
          src={"/images/banner/banner-icon-1-6.svg"}
        />
        <Image
          sx={styles.bannerIcon7}
          className="bannerIcon"
          alt="banner icon"
          src={"/images/banner/dot-pattern.svg"}
        />
        <HeadingFade>
          <Heading as="h2">
            All in one Data platform for all your Day to Day Operations
          </Heading>
        </HeadingFade>
        <HeadingFade delay={500}>
          <Image
            src={"/videos/Animation.gif"}
            sx={styles.bannerImage}
            alt="banner moc"
          />
        </HeadingFade>
      </Container>
    </Box>
  );
};

export default HeroBanner;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  banner: {
    overflow: "hidden",
    backgroundColor: "#F9FBFD",
    textAlign: "center",
    pt: ["110px", null, null, null, "130px"],
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      width: "100%",
      maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],
      mx: "auto",
      mt: "30px",
      mb: ["40px", null, null, "65px"],
    },
  },
  logo: {
    display: "block",
    borderRadius: "70%",
    p: "1rem",
    mx: "auto",
    boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)",
  },
  bannerImage: {
    display: "block",
    mx: "auto",
    position: "relative",
    boxShadow: "0 40px 40px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "15px 50px 0 0",
    maxWidth: ["100%", null, null, "80%", null, "100%"],
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
  },
  bannerIcon1: {
    top: "10%",
    left: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: "10%",
    right: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: "40px",
    right: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: "130px",
    left: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: "50%",
    left: "15%",
  },
  bannerIcon6: {
    bottom: "-65px",
    left: "0px",
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: "30%",
    right: "0%",
  },
};
