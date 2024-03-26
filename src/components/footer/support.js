/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import SectionHeading from "../section-heading";
import Image from "../image";
import HeadingFade from "../../animations/headingFade";
import { Fade } from "react-reveal";

export default function Support() {
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <HeadingFade>
          <Box>
            <SectionHeading
              sx={styles.heading}
              title="Meet our support team who always work hardly behind the scenes"
              description="Focus only on the meaning, we take care of the data. As soon as the meeting end you can export in one click into your preferred."
            />
          </Box>
        </HeadingFade>

        <Fade bottom duration={1000} ssrFadeout>
          <Box as="figure" sx={styles.thumbWrapper}>
            <Image
              src={"/images/footer/support-team.png"}
              loading="lazy"
              alt="Support Team"
            />
          </Box>
        </Fade>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [0],
  },
  heading: {
    mb: [8, null, null, 10, null, 15],
    maxWidth: [null, null, null, 500, 600, null],
    h3: {
      fontWeight: 500,
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.4,
      letterSpacing: "heading",
      color: "heading",
    },
    p: {
      mt: [3],
      maxWidth: [500],
    },
  },
  thumbWrapper: {
    display: "flex",
    justifyContent: "center",
    mb: "-1px",
    img: {
      height: [180, "auto"],
    },
  },
};
