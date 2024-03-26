"use client";

import {
  Box,
  Label,
  Input,
  Textarea,
  Button,
  Flex,
  ThemeUIProvider,
} from "theme-ui";
import { motion } from "framer-motion";
import { theme } from "../../theme/index.ts";
import CallFooter from "../../components/ContactPage/footer/footer.js";
import Support from "../../components/footer/support.js";
import ContactForm from "../../components/ContactPage/contactForm.js";
import Header from '../../components/header/header.js'
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
