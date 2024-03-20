"use client";
import { useRef, useEffect, useState } from "react";
import { rgba } from "polished";
import { jsx, Box, Container } from "theme-ui";
import TabTitle from "../tabs/tab-title";
import TabContent from "../tabs/tab-content";
import Currency from "../icons/currency";
import Cog from "../icons/cog";
import PieChart from "../icons/pie-chart";
import TabPane from "rc-tabs/lib/TabPanelList/TabPane";
import Tabs from "rc-tabs";

const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: "Budget Overview",
      },
    ],
    tabContent: [
      {
        image: "/images/workflow/dashboard.png",
        title: `First quality feature that boost your website rank & performance`,
        description: `Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <Cog />,
        title: "Create & adjust",
      },
    ],
    tabContent: [
      {
        image: "/images/workflow/dashboard.png",
        title: `Second quality feature that boost your website rank & performance`,
        description: `Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <PieChart />,
        title: "View Reports",
      },
    ],
    tabContent: [
      {
        image: "/images/workflow/dashboard.png",
        title: `Third quality feature that boost your website rank & performance`,
        description: `Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 4,
    tabPane: [
      {
        icon: <PieChart />,
        title: "Optimize website",
      },
    ],
    tabContent: [
      {
        image: "/images/workflow/dashboard.png",
        title: `Fourth quality feature that boost your website rank & performance`,
        description: `Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 5,
    tabPane: [
      {
        icon: <PieChart />,
        title: "Custom Dashboard",
      },
    ],
    tabContent: [
      {
        image: "/images/workflow/dashboard.png",
        title: `Fifth quality feature that boost your website rank & performance`,
        description: `Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.`,
        readMore: "#introduce-quality",
      },
    ],
  },
];

const Dashboard = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, []);

  return (
    <Box as="section" sx={styles.section}>
      <Container ref={containerRef}>
        <Box sx={styles.container}>
          <Tabs sx={styles.tabs} defaultActiveKey="1">
            {data?.map((tab) => (
              <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
                <TabContent tabContent={tab?.tabContent} />
              </TabPane>
            ))}
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;

const styles = {
  section: {
    height: "100vh",
    backgroundColor: "#353448",
    pt: [9, null, null, 11, 10, 12, null],
    pb: [9, null, null, null, 0],
  },
  container: {
    maxWidth: "none",
    pr: [6, null, null, 0],
  },
  tabs: {
    border: 0,
    color: "white",
    ".rc-tabs-nav": {
      mb: [8, null, null, 7, 10, null, 12],
    },
    ".rc-tabs-nav-wrap": {
      "::before": {
        backgroundColor: rgba("#fff", 0.1),
        content: ["none", null, null, `''`],
        height: 1,
        position: "absolute",
        left: 0,
        top: 51,
        width: "100%",
      },
      "::after": {
        borderColor: ["primary"],
      },
    },
    ".rc-tabs-nav-list": {
      display: ["flex"],
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      "+ .rc-tabs-tab": {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      "svg g, svg path": {
        transition: "0.3s ease-in-out 0s",
      },
    },
    ".rc-tabs-tab-btn": {
      alignItems: "center",
      display: ["flex", null, null, "block"],
      outline: "0 none",
      fontSize: [null, null, null, 15, 2],
    },
    ".rc-tabs-tab-active": {
      "svg g, svg path": {
        fill: "primary",
        opacity: 1,
      },
      h5: {
        color: "primary",
      },
    },
    ".rc-tabs-ink-bar": {
      backgroundColor: "primary",
      borderRadius: 5,
      bottom: [47],
      display: ["none", null, null, "block"],
    },
    ".rc-tabs-tabpane": {
      outline: "0 none",
    },
  },
};
