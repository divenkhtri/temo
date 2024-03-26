/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box, Container, Grid } from "theme-ui"; 
import TrackVisibility from "react-on-screen";
import SectionHeading from "../section-heading";
import Service from "./components/service";
import StatItem from "./components/stat-item";
import HeadingFade from "../../animations/headingFade";
import { Fade } from "react-awesome-reveal";

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

const data = {
  services: [
    {
      id: 1,
      icon: "/images/icons/server.png",
      title: "Data Ingestion",
      desc: `Seamless integration with diverse data sources including databases, APIs, streaming platforms, and cloud storage.`,
    },
    {
      id: 2,
      icon: "/images/icons/cloud.png",
      title: "Data Storage",
      desc: `Scalable and secure data storage with support for both structured and unstructured data.`,
    },
    {
      id: 3,
      icon: "/images/icons/optimization.png",
      title: "Data Processing",
      desc: `Distributed processing capabilities using GCP tools for efficient data transformation and analysis.`,
    },
    {
      id: 4,
      icon: "/images/icons/analytics.png",
      title: "Data Analytics & AI",
      desc: `Advanced analytics and machine learning capabilities for gaining actionable insights and predictive analytics.`,
    },
    {
      id: 5,
      icon: "/images/icons/stats.png",
      title: "Data Visualization",
      desc: `Intuitive and interactive visualizations to explore and communicate data findings effectively.`,
    },
    {
      id: 6,
      icon: "/images/icons/data.png",
      title: "Data Governance",
      desc: `Robust data governance and security features to ensure compliance and data privacy.`,
    },
  ],
  stats: [
    {
      id: 1,
      value: 50,
      suffix: "+",
      title: "Operational Dashboards",
    },
    {
      id: 2,
      value: 200,
      suffix: "+",
      title: "Transformation Rules",
    },
    {
      id: 3,
      value: 220,
      suffix: "+",
      title: "Business KPI",
    },
    {
      id: 4,
      value: 99,
      suffix: "%",
      title: "Fortify Data Security",
    },
  ],
};
const AboutServices = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <HeadingFade>
          <Box>
            <div
              as="p"
              sx={{ textAlign: "center", fontWeight: 900, letterSpacing: 10 }}
            >
              WORLD'S FIRST EVER
            </div>
            <div
              sx={{
                mb: "3rem",
                textAlign: "center",
                color: "#5567FF",
                letterSpacing: 5,
                fontWeight: 900,
                fontSize: [4, null, 5, "7rem"],
                lineHeight: 1.33,
                fontFamily: "Comfortaa, sans-serif",
                fontOpticalSizing: "auto",
                fontStyle: "normal",
              }}
            >
              data to output platform
            </div>
          </Box>
          <SectionHeading title="We at RGS have a all-in-one platform for industry specific use case" />
        </HeadingFade>
        <Grid sx={styles.serviceGrid}>
          {data.services.map((item) => (
            <Fade
              delay={item * 700}
              duration={1500}
              direction="up"
              cascade={true}
              fraction={0}
              triggerOnce={false}
            >
              <Service key={item.id} service={item} />
            </Fade>
          ))}
        </Grid>
        <Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <Fade
              delay={stat * 700}
              duration={1500}
              direction="up"
              cascade={true}
              fraction={0}
              triggerOnce={false}
            >
              <TrackVisibility key={stat.id} once>
                <StatItem stat={stat} />
              </TrackVisibility>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutServices;

const styles = {
  section: {
    pt: [8, null, null, 8, 10, null, 15],
    pb: [7, null, null, null, 10, null, 14],
  },
  serviceGrid: {
    backgroundColor: "white",
    mt: 10,
    boxShadow: "0px 0px 25px rgba(54, 91, 125, 0.09)",
    borderRadius: 10,
    gap: [8, null, null, "60px 40px", "50px 30px", "60px 40px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(1, 250px)",
      null,
      null,
      "repeat(2, 260px)",
      "repeat(3, 258px)",
      "repeat(3, 300px)",
    ],
    pt: [8, null, null, 16],
    pb: [8, null, null, 15],
  },
  statsGrid: {
    gap: [6, null, null, "60px 30px", "60px 80px", "60px 110px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 120px)",
      null,
      null,
      "repeat(4, 130px)",
      "repeat(4, 150px)",
    ],
    my: [15],
  },
};
