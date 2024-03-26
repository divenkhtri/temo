import { Box, Container } from "theme-ui";
import SectionHeader from "../section-header";
import Service from "../cards/service";
import { Fade } from "react-awesome-reveal";
import HeadingFade from "../../animations/headingFade";

const services = [
  {
    title: "Data Ingestion",
    description: "Efficiently import data from any source",
  },
  {
    title: "Data Harmonization",
    description: "Integrate and standardize diverse datasets",
  },
  {
    title: "Data Transformation",
    description: "Convert and manipulate data for analysis",
  },
  {
    title: "Data Visualization",
    description: "Present you data insights through visuals",
  },
  {
    title: "Action Analytics",
    description: "Derive actionable insights from data analysis",
  },
  {
    title: "Generative AI",
    description: "Utilizing Gen-AI solution various operations",
  },
  {
    title: "Data Science & Machine Learning",
    description: "Applied advanced algorithms for predictive analytics",
  },
  {
    title: "Workflow and Business Process Automation",
    description: "Streamline operations through automated workflows",
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <HeadingFade>
          <SectionHeader
            title="Didn’t find what you were looking for?"
            slogan="Here is a comprensive solution for your Operations"
          />
        </HeadingFade>
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Fade
              delay={i * 100}
              duration={1000}
              direction="up"
              cascade={true}
              fraction={0}
              triggerOnce={false}
            >
              <Service key={i} service={service} />
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 10],
  },
  grid: {
    gap: [3, null, null, 4],
    mt: 5,
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      null,
      "repeat(4, 1fr)",
      "repeat(4, 300px)",
    ],
  },
};
