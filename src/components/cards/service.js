import { jsx, Box, Text } from "theme-ui";

const Service = ({ service }) => {
  return (
    <Box sx={styles.service}>
      <Text as="p">{service.title}</Text>
      <Text as="span">{service.description}</Text>
    </Box>
  );
};

export default Service;

const styles = {
  service: {
    border: `1px solid rgba(51, 83, 145, 0.2)`,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: [150, null, null, 170],

    textAlign: "center",
    transition: "all 0.3s ease-in-out 0s",
    ":hover": {
      cursor: "pointer",
      boxShadow: "0px 11px 30px rgba(51, 83, 145, 0.3)",
      borderColor: "transparent",
      border: `1px solid rgba(51, 83, 145, 0.2)`,
    },
    p: {
      fontWeight: 500,
      fontSize: [1, null, null, "17px"],
      lineHeight: 1.77,
      color: "heading",
      pb: 2,
      px: 2,
    },
    span: {
      color: "primary",
      fontWeight: 700,
      fontSize: [1, null, null, "15px"],
      px: 2,
    },
  },
};
