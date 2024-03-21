"use client";
import { Flex, ThemeUIProvider } from "theme-ui";
import { theme } from "../../theme/index.ts";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/ProductPage/Productheader/header.js";
import PricingTable from "../../components/PricingPage/Pricing.jsx";
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
        </main>
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
};

export default Pricing;
