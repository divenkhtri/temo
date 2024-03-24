/** @jsxRuntime classic */ 
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer"
import Support from './footer/support'
export default function Layout({ children }) {
  return (
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
        {children}
      </main>
      <Support/>
      <Footer />
    </Flex>
  );
}
