/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx, Box, Flex, Container, Image as Img } from "theme-ui";
import SectionHeading from "../components/section-heading";
import Image from "../components/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const MobileApp = () => {
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
                <Image src={"/images/app.png"} alt="privacy" />
              </Flex>
            </motion.div>
            <motion.div
              style={{ x: textX, opacity: opacity }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Box sx={styles.heading}>
                <SectionHeading
                  title="Beyond on limitation with our android and iOS mobile application"
                  description="Manage your business communications even when you're away from your desk. Native mobile apps for all data insights, order management and inventory management make staying in touch on the go easier and effortless."
                />
              </Box>
            </motion.div>
          </Box>
        </Container>
      </motion.section>
    </div>
  );
};

export default MobileApp;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ["flex", null, null, "grid"],
    flexDirection: ["column-reverse", null, null, "unset"],
    alignItems: "center",
    gap: [null, null, null, 6, null, 14],
    gridTemplateColumns: ["1fr", null, null, "repeat(2, 1fr)", "445px 500px"],
    justifyContent: "center",
  },
  illustration: {
    alignItems: "center",
    mt: [8, null, null, 0],
  },
  heading: {
    textAlign: ["center", null, null, "left"],
    h3: {
      fontSize: [3, null, null, 6, 10, 11],
      lineHeight: 1.53,
    },
  },
  buttonGroup: {
    alignItems: "center",
    justifyContent: ["center", null, null, "unset"],
    mt: [4, null, null, 10],
    img: {
      maxWidth: ["120px", null, null, "none"],
    },
  },
};
