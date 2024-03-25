/** @jsxRuntime classic */
/** @jsx jsx */
"use client";

import { jsx, Box, Flex, Container } from "theme-ui";
import SectionHeading from "../components/section-heading";
import Image from "../components/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Security = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-50%", "0%", "0%"]
  );
  const textX = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "0%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref}>
      <motion.section
        sx={styles.section}
        id="features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }} // Adjust duration here
      >
        <Container>
          <Box sx={styles.grid}>
            <motion.div
              style={{ x: imageX, opacity: opacity }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Flex sx={styles.illustration}>
                <Image src={"/images/privacy.png"} alt="privacy" />
              </Flex>
            </motion.div>
            <motion.div
              style={{ x: textX, opacity: opacity }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Box sx={styles.heading}>
                <SectionHeading
                  title="Unbeatable privacy &amp; secure data storage"
                  description="Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption."
                />
              </Box>
            </motion.div>
          </Box>
        </Container>
      </motion.section>
    </div>
  );
};

export default Security;

const styles = {
  section: {
    mt: 23,
    pt: [6, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ["flex", null, null, "grid"],
    alignItems: "center",
    gap: [null, null, null, 6, 14],
    flexDirection: ["column-reverse", null, null, "unset"],
    gridTemplateColumns: ["1fr", null, null, "repeat(2, 1fr)", "1fr 470px"],
  },
  heading: {
    textAlign: ["center", null, null, "left"],
    h3: {
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: "center",
    mt: [8, null, 0],
  },
};
