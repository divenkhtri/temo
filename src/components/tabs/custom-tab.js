'use client'
import React, { useState } from "react";
import { Box, Flex, Text } from "theme-ui";

const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Flex sx={{ marginBottom: 3 }}>
        {tabs.map((tab, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              marginRight: 3,
              borderBottom: activeTab === index ? "2px solid primary" : "none",
              paddingBottom: 2,
            }}
            onClick={() => handleTabClick(index)}
          >
            <Text sx={{ fontWeight: activeTab === index ? "bold" : "normal" }}>{tab.title}</Text>
          </Box>
        ))}
      </Flex>
      <Box>{tabs[activeTab].content}</Box>
    </Flex>
  );
};

export default CustomTabs;
