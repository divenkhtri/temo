/** @jsxRuntime classic */
/** @jsx jsx */
"use client";
import { jsx, Box, Flex, Container } from "theme-ui";
import SectionHeading from "../components/section-heading";
import Image from "../components/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Addons = () => {
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
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Container>
          <Box sx={styles.grid}>
            <motion.div transition={{ duration: 0.3, ease: "easeInOut" }}>
              <Box
                style={{ x: imageX, opacity: opacity }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <SectionHeading
                  sx={styles.heading}
                  title="Integrated with the ultimate add-on management"
                  description="Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption."
                  learnMore="Explore More"
                />
              </Box>
            </motion.div>
            <motion.div
              style={{ x: textX, opacity: opacity }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Flex sx={styles.illustration}>
                <Image src={"/images/addons.png"} alt="addons" />
              </Flex>
            </motion.div>
          </Box>
        </Container>
      </motion.section>
    </div>
  );
};

export default Addons;

const styles = {
  section: {
    mt: "-2rem",
    pt: [6, null, null, 8, 10, 11],
    pb: [8, null, null, 12, null, 14],
  },
  grid: {
    display: "grid",
    alignItems: "center",
    gap: 6,
    gridTemplateColumns: ["1fr", null, null, "repeat(2, 1fr)", "500px 1fr"],
  },
  heading: {
    textAlign: ["center", null, null, "left"],
    h3: {
      fontSize: [3, null, null, 6, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: "center",
  },
};
