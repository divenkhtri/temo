/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container, Box } from "theme-ui";
import SectionHeading from "../section-heading";
import Image from "../image";
import HeadingFade from "../../animations/headingFade";

const TechStack = () => {
  return (
    <section id="clients" sx={styles.section}>
      <Container>
        <HeadingFade>
          <SectionHeading
            sx={styles.heading}
            title="A Robust Technology Stack "
            description="Our platform uses latest tools and platform to provide high value output to our customers."
          />
        </HeadingFade>
        <HeadingFade delay={500}>
          <Box sx={{ background: "#000" }}>
            <Flex as="figure" sx={styles.illustration}>
              <Image src={"/images/techused/clients.svg"} alt="clients" />
            </Flex>
          </Box>
        </HeadingFade>
      </Container>
    </section>
  );
};

export default TechStack;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
  illustration: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: [3, null, null, 0],
  },
};
