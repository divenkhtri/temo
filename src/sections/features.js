import React, { useState } from "react";
import { Box, Container, Button } from "theme-ui";
import BlockTitle from "../components/block-title";
import Image from "../components/image";
import { AiFillDollarCircle, AiFillPieChart } from "react-icons/ai";
import { FaBriefcase, FaCog } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-reveal";
import SectionHeader from "../components/section-header";
const Featured = () => {
  const [tab, setTab] = useState({
    active: "budget",
  });
  const [[direction]] = useState([0]);

  const handleTab = (tab) => {
    if (tab === "budget") {
      setTab({
        ...tab,
        active: "budget",
      });
    }
    if (tab === "adjust") {
      setTab({
        ...tab,
        active: "adjust",
      });
    }
    if (tab === "report") {
      setTab({
        ...tab,
        active: "report",
      });
    }
    if (tab === "create") {
      setTab({
        ...tab,
        active: "create",
      });
    }
  };
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <Box as="section" sx={styles.featured}>
      <Fade bottom>
        <Container sx={styles.container}>
          <BlockTitle
            title="Why RGS Data Platform"
            text="Introducing all in one operational application for your Restaurent Operation"
          />
          <Box sx={styles.tabButtonTopWrapper}>
            <Box sx={styles.tabButtonWrapper}>
              <Button
                onClick={() => handleTab("budget")}
                className={`${tab.active === "budget" ? "active" : ""}`}
              >
                <AiFillDollarCircle />
                Sales Overview
              </Button>
              <Button
                onClick={() => handleTab("adjust")}
                className={`${tab.active === "adjust" ? "active" : ""}`}
              >
                <FaCog />
                Manage Order
              </Button>
              <Button
                onClick={() => handleTab("report")}
                className={`${tab.active === "report" ? "active" : ""}`}
              >
                <AiFillPieChart />
                View Reports
              </Button>
              <Button
                onClick={() => handleTab("create")}
                className={`${tab.active === "create" ? "active" : ""}`}
              >
                <FaBriefcase />
                Review Data Quality
              </Button>
            </Box>
          </Box>
          <AnimatePresence initial={false} custom={direction}>
            <Box sx={styles.tabContent}>
              {tab.active === "budget" && (
                <motion.div
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 150, damping: 40 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <SectionHeader
                    title="Sales & Financial Business KPI's"
                    slogan="A comprehensive of 32+ key business KPI's for Sales and Financial Operations "
                  />
                  <Image
                    src={"/videos/sales.gif"}
                    alt="tab image"
                    className="tabImage"
                    sx={{
                      boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.3)",
                      borderRadius: "10px  ",
                    }}
                  />
                </motion.div>
              )}
              {tab.active === "create" && (
                <motion.div
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 150, damping: 40 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <SectionHeader
                    title="Check your data's health and quality"
                    slogan="Entire visualized monitorizing system to view your data quality & generate data report as per you need"
                  />
                  <Image
                    src={"/videos/data.gif"}
                    alt="tab image"
                    className="tabImage"
                    sx={{
                      boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.3)",
                      borderRadius: "10px  ",
                    }}
                  />
                </motion.div>
              )}
              {tab.active === "adjust" && (
                <motion.div
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 150, damping: 40 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <SectionHeader
                    title="Manage Your Order Easily"
                    slogan="Easily Manage and Track you customer's orders and return items "
                  />
                  <Image
                    src={"/videos/order.gif"}
                    alt="tab image"
                    className="tabImage"
                    sx={{
                      boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.3)",
                      borderRadius: "10px  ",
                    }}
                  />
                </motion.div>
              )}
              {tab.active === "report" && (
                <motion.div
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 150, damping: 40 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <SectionHeader
                    title="Easily view your business operation in visualized form and generate realtime reports"
                    slogan="A comprehensive of 220+ key business KPI's with 50+ Industrial dashboards "
                  />
                  <Image
                    src={"/videos/report.gif  "}
                    alt="tab image"
                    className="tabImage"
                    sx={{
                      boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.3)",
                      borderRadius: "10px  ",
                    }}
                  />
                </motion.div>
              )}
            </Box>
          </AnimatePresence>
        </Container>
      </Fade>
    </Box>
  );
};

export default Featured;

const styles = {
  featured: {
    pt: ["80px", null, null, null, "80px", null, "40px"],
    backgroundColor: "#F9FAFC",
  },
  container: {
    position: "relative",
    top: "150px",
    mt: "-150px",
  },
  tabButtonTopWrapper: {
    overflowY: ["hidden", null, null, null, null, "inherit"],
    overflowX: ["auto", null, null, null, null, "inherit"],
  },
  tabButtonWrapper: {
    width: ["700px", null, null, null, null, "100%"],
    mx: ["auto", null, null, null, null, "0"],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(1,7,13,.1)",
    mb: "35px",
    button: {
      display: "flex",
      alignItems: "center",
      pb: ["15px", null, null, null, "35px"],
      px: ["15px", null, null, null, "30px"],
      flexShrink: "0",
      border: 0,
      backgroundColor: "rgba(0,0,0,0)",
      color: "#0F2137",
      fontSize: ["14px", null, null, null, "18px"],
      fontWeight: 500,
      lineHeight: 1,
      position: "relative",
      transition: "all 500ms ease",
      svg: {
        fontSize: ["18px", null, null, null, "30px"],
        color: "#ADBDD0",
        opacity: 0.7,
        mr: "15px",
        transition: "all 500ms ease",
      },
      "&:hover, &.active": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "#0F2137",
        svg: {
          color: "#0F2137",
          opacity: 1,
        },
        "&::before": {
          transform: "scale(1,1)",
        },
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-2px",
        backgroundColor: "#0F2137",
        left: 0,
        width: "100%",
        height: "3px",
        transform: "scale(0,1)",
        transition: "transform 500ms ease",
      },
    },
  },
  tabContent: {
    minHeight: ["190px", null, "300px", "385px", null, "600px"],
    position: "relative",
    "&::before": {
      content: "''",
      width: "302px",
      height: "347px",
      backgroundImage: `url(${"/images/dot-pattern.svg"})`,
      position: "absolute",
      bottom: "-30px",
      right: "-40px",
      display: ["none", null, null, null, null, "block"],
    },
    ".tabImage": {
      position: "relative",
    },
  },
};
