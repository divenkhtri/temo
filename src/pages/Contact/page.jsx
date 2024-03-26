"use client";

import { Flex, ThemeUIProvider } from "theme-ui";
import { theme } from "../../theme/index.ts";
import CallFooter from "../../components/ContactPage/footer/footer.js";
import ContactForm from "../../components/ContactPage/contactForm.js";
import Header from "../../components/header/header.js";
const ContactPage = () => {
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
          <ContactForm />
        </main>
        <CallFooter />
      </Flex>
    </ThemeUIProvider>
  );
};

export default ContactPage;
