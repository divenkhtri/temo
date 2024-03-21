import { Box, Container, Text } from "theme-ui";
import SectionHeader from "../section-header";
import Service from "../cards/service";

const services = [
  {
    title: "Data Ingestion",
    description: "Efficiently collect and import data",
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
    description: "Present data insights through visuals",
  },
  {
    title: "Action Analytics",
    description: "Derive actionable insights from data analysis",
  },
  {
    title: "Generative AI",
    description: "Utilize AI to create novel content or solutions",
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

const AboutServices = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <Box sx={{ mx: "auto", textAlign: "center" }}>
          <Text
            sx={{
              color: "primary",
              fontWeight: 500,
              fontSize: 3,
              lineHeight: 2.25,
              mb: 10,
            }}
          >
            FROM DATA TO OPERATIONAL MANAGEMENT TO GEN AI
          </Text>
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
              The RGS Data Platfrom
            </Text>
          </Box>
        </Box>
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutServices;

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
