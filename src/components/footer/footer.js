/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import Logo from "../logo";
import { Link } from "../link";
import { footerNav } from "./footer.data";
import CallToAction from "./call-to-action";
import { Fragment } from "react";
export default function Footer() {
  return (
    <Fragment>
      <CallToAction />
      <footer sx={styles.footer}>
        <Container>
          <Box sx={styles.footerInner}>
            <Box sx={styles.copyright}>
              <Logo sx={styles.logo} light />
              <Text as="span">
                Copyright by {new Date().getFullYear()} RGS Technologies, Inc
              </Text>
            </Box>

            <Box as="ul" sx={styles.footerNav}>
              {footerNav.map(({ path, label }, i) => (
                <li key={i}>
                  <Link path={path} key={i} label={label} variant="footer" />
                </li>
              ))}
            </Box>
          </Box>
        </Container>
      </footer>
    </Fragment>
  );
}

const styles = {
  footer: {
    backgroundColor: "#d7e2f7",
    pt: 3,
    pb: 3,
  },
  footerTopInner: {
    gap: [50, null, null, null, 0, 50],
    display: ["grid"],
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      "repeat(5, 1fr)",
    ],
  },
  footerInner: {
    display: ["block", null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 0 40px",
  },
  copyright: {
    display: ["flex"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    span: {
      color: "#000",
      fontSize: "17px",
      lineHeight: 1.29,
      mt: ["18px", "18px", "7px"],
    },
  },
  logo: {
    mr: 6,
  },
  footerNav: {
    listStyle: "none",
    margin: ["15px 0 0", "15px 0 0", "0"],
    padding: 0,
    display: ["flex"],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, "flex-start"],
    "li + li": {
      ml: ["18px", null, "20px"],
      "@media only screen and (max-width: 400px)": {
        mb: "10px",
      },
    },
    a: {
      color: "#000",
      fontSize: [1, null, null, 3],
      textDecoration: "none",
      transition: "font-weight 0.05s ease-in-out",
      "&:hover": {
        fontWeight: 900,
      },
    },
  },
};
