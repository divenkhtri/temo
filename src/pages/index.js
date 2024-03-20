import React from "react";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../theme/index.ts";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Banner from "../sections/banner";
import Testimonials from "../sections/testimonials";
import Security from "../sections/security";
import Addons from "../sections/addons";
import MobileApp from "../sections/mobile-app";
import UltimateFeatures from "../sections/ultimate-features";
import Faq from "../sections/faq";
import Pricing from "../sections/pricing";
import Featured from "../sections/features.js";
import WorkFlow from "../sections/workflow.js";

const IndexPage = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Layout>
        <SEO
          title="CRM Software Landing"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <Testimonials />
        <Featured />
        <Security />
        <Addons />
        <UltimateFeatures />
        <MobileApp />
        <Pricing />
        <Faq />
      </Layout>
    </ThemeUIProvider>
  );
};
export default IndexPage;
