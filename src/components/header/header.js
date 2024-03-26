/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Button } from "theme-ui";
import { useState } from "react";
import Sticky from "react-stickynode"; 
import { DrawerProvider } from "../../contexts/drawer/drawer-provider";
import NavbarDrawer from "./navbar-drawer";
import Logo from "../logo";

import menuItems from "./header.data";
import Link from "next/link";

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? "is-sticky" : ""}
        >
          <Container sx={styles.container}>
            <Logo isSticky={state.isSticky} sx={styles.logo} />
            <nav as="nav" sx={styles.navbar}>
              {menuItems.map(({ path, label }, i) => (
                <Link key={i} href={path}>
                  <div className={state.isSticky ? "is-sticky" : ""}>
                    {label}
                  </div>
                </Link>
              ))}
            </nav>
            <Link href="/Contact/page">
              <Button variant="primary" sx={styles.button}>
                Contact Us
              </Button>
            </Link>
            <NavbarDrawer isSticky={state.isSticky} />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    backgroundColor: "transparent",
    position: "fixed",
    left: 0,
    right: 0,
    py: [5],
    transition: "all 0.3s ease-in-out 0s",
    "&.is-sticky": {
      backgroundColor: "white",
      boxShadow: "0px 20px 50px rgba(59, 90, 136, 0.05)",
      py: [3],
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    a: {
      color: "white",
      cursor: "pointer",
      textDecoration: "none",
      display: ["flex"],
      fontWeight: 500,
      fontSize: 5,
      padding: 0,

      transition: "all 0.3s ease-in-out 0s",
      "+ a": {
        ml: [null, null, null, null, 4, 7],
      },
      ":hover": {
        fontSize: 6,
      },
    },
    ".is-sticky": {
      color: "text",
      ":hover": {
        fontSize: 6,
        color: "#5567FF",
      },
    },
    ".active": {
      color: "primary",
    },
  },
  button: {
    display: ["none", null, null, null, "inline-flex"],
    minHeight: 45,
    px: "18px",
    ":hover": {
      fontSize: 4,
      px: "22px",

    },
  },
};
