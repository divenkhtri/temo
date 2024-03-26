/** @jsxRuntime classic */
/** @jsx jsx */
import { Text, jsx } from "theme-ui";
import { Container, Grid, Box } from "theme-ui";
import FeatureCardColumn from "./feature-card-column.js";
import SectionHeader from "../section-header.js";
import HeadingFade from "../../animations/headingFade.js";
import { Fade } from "react-awesome-reveal";

const data = [
  {
    id: 1,
    imgSrc: "/images/key-feature/vector.svg",
    altText: "High Quality Data",
    title: "High Quality Data",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    imgSrc: "/images/key-feature/speed.svg",
    altText: "Quality",
    title: "Cost efficient analytics",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    imgSrc: "/images/key-feature/speed.svg",
    altText: "Quality",
    title: "Fast, measurable, & actionable insights",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    imgSrc: "/images/key-feature/editing.svg",
    altText: "Monitoring",
    title: "No-code, self- service",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 5,
    imgSrc: "/images/key-feature/vector.svg",
    altText: "High Quality Data",
    title: "Skill diffusion",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 6,
    imgSrc: "/images/key-feature/editing.svg",
    altText: "Monitoring",
    title: "Instant gratification",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <Box sx={{ mx: "auto", textAlign: "center", mb: 10 }}>
          <HeadingFade>
            <Box>
              <Text
                sx={{
                  color: "heading",
                  fontWeight: [500, null, null, 700],
                  fontSize: "42px",
                  lineHeight: [1.33, 1.33, 2.08],
                  letterSpacing: [null, null, null, "heading"],
                }}
              >
                Our Promise
              </Text>
            </Box>
          </HeadingFade>
          <HeadingFade delay={500}>
            <Text
              sx={{
                color: "primary",
                fontWeight: 500,
                fontSize: 3,
                mb: 10,
              }}
            >
              We help enterprises solve their toughest business challenges and
              meet <br /> their top data and AI priorities with faster time to
              value.
            </Text>
          </HeadingFade>
        </Box>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Fade
              delay={item * 700}
              duration={1500}
              direction="up"
              cascade={true}
              fraction={0}
              triggerOnce={false}
            >
              <FeatureCardColumn
                key={item.id}
                src={item.imgSrc}
                alt={item.title}
                title={item.title}
                text={item.text}
              />
            </Fade>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
