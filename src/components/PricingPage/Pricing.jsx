/** @jsxImportSource theme-ui */
import { Container, Flex, Heading, Text } from "theme-ui";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

const PricingTable = () => {
  const fadeInVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "10rem",
        mb: "7rem",
      }}
    >
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        <motion.div
          variants={fadeInVariant}
          initial="initial"
          animate="animate"
        >
          <Heading
            as="h1"
            variant="styles.h1"
            sx={{ textAlign: "center", mb: 3 }}
          >
            Plan & Pricing
          </Heading>
          <Text as="p" sx={{ textAlign: "center", mb: 10 }}>
            Choose the plan that fits your needs
          </Text>
        </motion.div>
        <div sx={styles.tableContainer}>
          <motion.div
            variants={fadeInVariant}
            initial="initial"
            animate="animate"
            sx={styles.table}
          >
            <div sx={styles.tableHeader}>
              <div></div>
              <div>Basic</div>
              <div>Advanced</div>
              <div>Business</div>
            </div>
            <div sx={styles.tableRow}>
              <div sx={{ fontWeight: 700, fontSize: 2 }}>Capacity</div>
              <div>Process upto 1 GB</div>
              <div>Process upto 10 GB</div>
              <div>Process upto 100 GB</div>
            </div>
            <div sx={styles.tableRow}>
              <div sx={{ fontWeight: 700, fontSize: 2 }}>Connectors</div>
              <div>Basic Connectors Available</div>
              <div>All 10 Connectors</div>
              <div>
                All 10 Connectos + <br /> Custom Connectors
              </div>
            </div>
            <div sx={styles.tableRow}>
              <div sx={{ fontWeight: 700, fontSize: 2 }}>Users</div>
              <div>Upto 5</div>
              <div>Upto 10</div>
              <div>Unlimited Users</div>
            </div>
            <div sx={styles.tableRow}>
              <div sx={{ fontWeight: 700, fontSize: 2 }}>Dashboards</div>
              <div>Pick upto any 10 Dashboards</div>
              <div>All 50+ Dashboards</div>
              <div>
                All 50+ Dashboards + <br />
                Role based access control
              </div>
            </div>
            <div sx={styles.tableRow}>
              <div sx={{ fontWeight: 700, fontSize: 2 }}>Support</div>
              <div>Email</div>
              <div>
                SSH/SSL + <br /> Email & Live Chat Support
              </div>
              <div>
                SSH/SSl + <br /> Email & Live Chat Support 24 * 5
              </div>
            </div>
            <div sx={styles.tableRow}>
              <div sx={{ fontWeight: 700, fontSize: 2 }}>
                Generative-AI Models
              </div>
              <div>-</div>
              <div>Requested Addons Models</div>
              <div>
                1. Menu Recommendation Model
                <br />
                2. Propensity Model
                <br />
                3. Promotion's Recommendation Engine
              </div>
            </div>
            <div sx={styles.tableRow}>
              <div sx={{ fontWeight: 700, fontSize: 2 }}>Pricing</div>
              <Link href="/Contact/page" sx={{textDecoration: 'none'}}>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={styles.button}
                  >
                    Start Free Trial <HiOutlineArrowRight />
                  </motion.button>
                </div>
              </Link>
              <Link href="/Contact/page" sx={{textDecoration: 'none'}}>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={styles.button}
                  >
                    Contact Sales <HiOutlineArrowRight />
                  </motion.button>
                </div>
              </Link>
              <Link href="/Contact/page" sx={{textDecoration: 'none'}}>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={styles.button}
                  >
                    Contact Sales <HiOutlineArrowRight />
                  </motion.button>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </Flex>
    </Container>
  );
};

const styles = {
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    border: "1px solid #ccc",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    backgroundColor: "primary",
    color: "white",
    padding: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottom: "2px solid",
    borderColor: "primary",
  },
  tableRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "12px 16px",
    borderBottom: "1px solid",
    borderColor: "borderColor",
    fontSize: "14px",
    lineHeight: "1.5",
    ":first-of-type": {
      fontWeight: "bold",
    },
    "& > div": {
      padding: "8px",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "primary",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    outline: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      backgroundColor: "secondary",
    },
    svg: {
      marginLeft: "4px",
    },
  },
};

export default PricingTable;
