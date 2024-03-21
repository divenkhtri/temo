"use client";
import React from "react";
import { ThemeUIProvider, Flex } from "theme-ui";
import { theme } from "../../theme/index.ts";

import HeroBanner from "../../components/ProductPage/HeroBanner.jsx";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/ProductPage/Productheader/header.js";
import Services from "../../components/ProductPage/Services.jsx";
import PremiumFeature from "../../components/ProductPage/PremiumFeature.jsx";
import CleaningRules from "../../components/ProductPage/CleaningRules.jsx";
import IntroVideo from "../../components/ProductPage/IntroVideo.jsx";
import Faq from "../../components/ProductPage/FAQ.jsx";

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
          <Services />
          <CleaningRules />
          <IntroVideo />
          <Faq />
        </main>
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
};
export default ProductPage;
