import React from "react";
import { ThemeUIProvider, Flex } from "theme-ui";
import { theme } from "../../theme/index.ts";

import HeroBanner from "../../components/ProductPage/HeroBanner.jsx";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/ProductPage/Productheader/header.js";
import Dashboard from "../../components/ProductPage/Dashboard.jsx";

const ProductPage = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Flex
        sx={{
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />
        <main
          sx={{
            variant: "layout.main",
          }}
        >
          <HeroBanner />
          <Dashboard />
        </main>
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
};
export default ProductPage;
