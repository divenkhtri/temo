/** @jsxImportSource theme-ui */
import { Box, Container, Text } from "theme-ui";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const AboutHerobanner = () => {
  return (
    <Box
      as="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={"/videos/homevideo.webm"} type="video/webm" />
      </video>

      {/* Overlay with Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.8)", // Adjust opacity as needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container sx={{ marginTop: '4rem' }}>
          <Text
            as="h1"
            sx={{
              color: "white",
              textAlign: "center",
              mb: 3,
              fontSize: "86px",
            }}
          >
            RGS Data Platform
          </Text>
          {/* Wrap the text with motion.div */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animation effect
            transition={{ duration: 1 }} // Transition duration
          >
            <Text as="p" sx={{ color: "white", textAlign: "right", fontSize: 3 }}>
              Our mission is to accelerate data-to-outcome journeys for
              enterprises, putting <br /> them in the driver’s seat with complete
              control, observability, and data-driven <br /> intelligence to take
              the right actions at the right time – without ever worrying <br />
              about the scale and complexity of data.
            </Text>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutHerobanner;
