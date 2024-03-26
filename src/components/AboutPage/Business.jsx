/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "./components/text-feature";
import Image from "../image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import LeftFade from "../../animations/leftFade";
import RightFade from "../../animations/rightFade";
const data = {
  title: "We help you to boost your business profitable with our platform",
  description:
    "We help business to boost their profitablity and we provide customized solution for each client.",
  btnName: "Get Started Now",
  btnURL: "/Contact/page",
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Get realtime insight of your business",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Upscale your business operation using your data",
    },
  ],
};

export default function BusinessProfit() {
  return (
    <section sx={{ variant: "section.profit", mb: 15 }}>
      <Container sx={styles.containerBox}>
        <LeftFade>
          <Box sx={styles.thumbnail}>
            <Image
              src={"/images/business/business-profit.png"}
              alt="Thumbnail"
              width="700"
              height="565"
            />
          </Box>
        </LeftFade>
        <RightFade>
          <Box sx={styles.contentBox}>
            <TextFeature
              title={data.title}
              description={data.description}
              btnName={data.btnName}
              btnURL={data.btnURL}
              points={data.points}
            />
          </Box>
        </RightFade>
      </Container>
      <LeftFade>

      <Box sx={styles.bottomArrow}>
        <Image src={"/images/business/drawing-arrow.svg"} alt="Arrow" />
      </Box>
      </LeftFade>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: "flex",
    order: [2, null, null, 0],
    mx: ["auto", 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 350, 400, "470px"],
    pb: [7, null, null, 0],
    ".btn__link": {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: "absolute",
    left: "33%",
    display: "block",
  },
};
