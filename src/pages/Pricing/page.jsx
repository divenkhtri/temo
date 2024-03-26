"use client";
import { Flex, ThemeUIProvider } from "theme-ui";
import { theme } from "../../theme/index.ts";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/ProductPage/Productheader/header.js";
import PricingTable from "../../components/PricingPage/Pricing.jsx";
import Support from "../../components/footer/support.js";
import StillConfused from "../../components/PricingPage/StillConfused.jsx";
import HeadingFade from "../../animations/headingFade.js";
const Pricing = () => {
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
          <PricingTable />
          <HeadingFade delay={500}>
            <StillConfused />
          </HeadingFade>
        </main>
        <Support />
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
};

export default Pricing;
