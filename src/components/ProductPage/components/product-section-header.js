import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function ProductSectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader", mx: 'auto', textAlign: "center" }}>
      <Text
        as="p"
        sx={{
          color: "primary",
          fontWeight: 500,
          fontSize: 3,
          lineHeight: 2.25,
          color: isWhite ? "#000" : "#000",
          opacity: isWhite ? 1 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          fontWeight: [500, null, null, 700],
          mb: '4rem',
          fontSize: [6, null, 7, 10],
          lineHeight: [1.33, 1.33, 2.08],
          letterSpacing: [null, null, null, "heading"],
          color: isWhite ? "white" : "heading",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
