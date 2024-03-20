/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from "theme-ui";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { DrawerContext } from "../../contexts/drawer/drawer-context";
import Drawer from "../drawer";
import Logo from "../logo";
import menuItems from "./header.data";

const NavbarDrawer = ({ isSticky }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="340px"
      placement="right"
      drawerHandler={
        <Box sx={styles.handler}>
          <MenuButton color={isSticky ? "text" : "white"} sx={{ p: 0 }} />
        </Box>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={"/images/icons/close.png"} alt="close" />
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.wrapper}>
        <Logo sx={styles.logo} dark />
        <Box as="ul" sx={styles.navbar}>
          {menuItems.map(({ path, label }, i) => (
            <Box as="li" key={i}>
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {label}
              </Link>
            </Box>
          ))}
        </Box>
        <Button variant="primary" sx={styles.donateNow}>
          Purchase Now
        </Button>
      </Box>
    </Drawer>
  );
};
export default NavbarDrawer;

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    cursor: "pointer",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
  drawer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    outline: 0,
  },
  mask: {
    opacity: 0.2,
  },
  close: {
    position: "absolute",
    top: 35,
    right: 30,
    zIndex: "1",
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    p: 0,
  },
  wrapper: {
    height: "100%",
    paddingTop: "21px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    ml: 6,
    mb: 5,
    mr: 12,
    img: {
      maxWidth: [160, null, null, "100%"],
    },
  },
  navbar: {
    listStyle: "none",
    m: 0,
    p: 0,
    "li > a": {
      backgroundColor: "transparent",
      borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      display: "flex",
      alignItems: "center",
      color: "heading",
      minHeight: 44,
      pl: 6,
      position: "relative",
      transition: "all 0.3s ease-in-out 0s",
    },
    "li:last-child > a": {
      borderBottom: (t) => `1px solid ${t.colors.borderColor}`,
    },
    ".active": {
      color: "primary",
    },
  },
  donateNow: {
    fontSize: 1,
    minHeight: 45,
    margin: "auto 30px 40px",
  },
};
