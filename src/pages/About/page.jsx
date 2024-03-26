"use client";
import React from "react";
import { ThemeUIProvider, Flex } from "theme-ui";
import { theme } from "../../theme/index.ts";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/header/header";
import Faq from "../../components/ProductPage/FAQ.jsx";
import AboutHerobanner from "../../components/AboutPage/AboutHerobanner.jsx";
import KeyFeature from "../../components/AboutPage/OurPromise.jsx";
import AboutServices from "../../components/AboutPage/AboutService.jsx";
import Support from "../../components/footer/support.js";
import TechStack from "../../components/AboutPage/TechStack.jsx";
import BusinessProfit from "../../components/AboutPage/Business.jsx";
import Knowledge from "../../components/AboutPage/Knowlegde.jsx";
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
          <BusinessProfit />
          <Knowledge />
          <KeyFeature />
          <TechStack />
          <Faq />
        </main>
        <Support />
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
};
export default About;
