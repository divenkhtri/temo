/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "../components/section-heading";
import Feature from "../components/cards/feature";
import { Fade } from "react-awesome-reveal";
const data = [
  {
    id: 1,
    icon: "/images/icons/server.png",
    title: "Data Ingestion",
    description: `Seamless integration with diverse data sources including databases, APIs, streaming platforms, and cloud storage.`,
  },
  {
    id: 2,
    icon: "/images/icons/cloud.png",
    title: "Data Storage",
    description: `Scalable and secure data storage with support for both structured and unstructured data.`,
  },
  {
    id: 3,
    icon: "/images/icons/optimization.png",
    title: "Data Processing",
    description: `Distributed processing capabilities using GCP tools for efficient data transformation and analysis.`,
  },
  {
    id: 4,
    icon: "/images/icons/analytics.png",
    title: "Data Analytics & AI",
    description: `Advanced analytics and machine learning capabilities for gaining actionable insights and predictive analytics.`,
  },
  {
    id: 5,
    icon: "/images/icons/stats.png",
    title: "Data Visualization",
    description: `Intuitive and interactive visualizations to explore and communicate data findings effectively.`,
  },
  {
    id: 6,
    icon: "/images/icons/data.png",
    title: "Data Governance",
    description: `Robust data governance and security features to ensure compliance and data privacy.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Container sx={styles.section}>
      <SectionHeading
        sx={styles.heading}
        title="Go beyond ultimate Services and Operation"
        slogan="Ideal solutions for your Restaurent"
      />
      <Box sx={styles.features}>
        {data?.map((item) => (
          <Fade
            delay={item * 700}
            duration={1500}
            direction="up"
            cascade={true}
            fraction={0}
            triggerOnce={false}
          >
            <Feature key={item.id} className="feature-item" data={item} />
          </Fade>
        ))}
      </Box>
    </Container>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    py: [6, null, null, 8, 15],
  },
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ["none", null, null, 565, null, "none"],
  },
  features: {
    gap: [6, null, null, "90px 40px"],
    display: ["grid"],
    maxWidth: 1175,
    mx: "auto",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [
      "repeat(1, 300px)",
      null,
      null,
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
  },
};
