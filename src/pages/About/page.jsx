"use client";
import React from "react";
import { ThemeUIProvider, Flex } from "theme-ui";
import { theme } from "../../theme/index.ts";

import Footer from "../../components/footer/footer.js";
import Header from "../../components/header/header";
import Services from "../../components/ProductPage/Services.jsx";
import PremiumFeature from "../../components/ProductPage/PremiumFeature.jsx";
import CleaningRules from "../../components/ProductPage/CleaningRules.jsx";
import IntroVideo from "../../components/ProductPage/IntroVideo.jsx";
import Faq from "../../components/ProductPage/FAQ.jsx";
import AboutHerobanner from "../../components/AboutPage/AboutHerobanner.jsx";
import WhyUs from "../../components/AboutPage/WhyUs.jsx";
import KeyFeature from "../../components/AboutPage/OurPromise.jsx";
import AboutServices from "../../components/AboutPage/AboutService.jsx";

const About = () => {
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
          <AboutHerobanner />
          <AboutServices />
          <KeyFeature/>
          <CleaningRules />
          <IntroVideo />
          <Faq />
        </main>
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
};
export default About;
