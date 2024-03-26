/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "./components/text-feature";
import Image from "../image";
import LeftFade from "../../animations/leftFade";
import RightFade from "../../animations/rightFade";

const data = {
  title: "we are committed to using customized solution for our customers",
  description:
    "At RGS, our core value is to satisfy our customer need with out customized solution. Get started with us today.",
  btnName: "Schedule Meeting",
  btnURL: "/Contact/page",
};

export default function Knowledge() {
  return (
    <section sx={{ variant: "section.knowledge" }}>
      <Container sx={{ mb: "7rem" }}>
        <Container sx={styles.containerBox}>
        <LeftFade>

          <Box sx={styles.contentBox}>
            <TextFeature
              title={data.title}
              description={data.description}
              btnName={data.btnName}
              btnURL={data.btnURL}
            />
          </Box>
        </LeftFade>
        <RightFade>

          <Box sx={styles.thumbnail}>
            <Image
              src={"/images/business/knowledge-thumb.png"}
              alt="Thumbnail"
              width="632"
              height="750"
            />
          </Box>
        </RightFade>
        </Container>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  thumbnail: {
    pl: [0, null, null, 4, 7, 8, 9],
    pr: [0, null, null, null, 2, 9, 6],
    display: "flex",
    mx: ["auto", null, null, 0],
    img: {
      height: [400, "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 365, 420, 430, "490px"],
    pb: [7, null, null, 0],
    ".description": {
      pr: [0, null, 7, 5],
    },
    ".btn__link": {
      mt: [5, null, null, 6],
    },
  },
};
