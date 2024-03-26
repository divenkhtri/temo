/** @jsxImportSource theme-ui */
import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Input,
  Textarea,
  Button,
  Checkbox,
  Select,
} from "theme-ui";
import Image from "../image";
import { Computer, ScreenShare, Share, Smile } from "lucide-react";
import { Fade } from "react-reveal";
import HeadingFade from "@/animations/headingFade";
const ContactForm = () => {
  return (
    <Flex
    sx={{
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#5567FF",
        py: [4, 5, 6], // Responsive vertical padding
      }}
    >
     <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Flex sx={{ flexDirection: ["column", "row"], mt: [4, "10rem"] }}>
          <Box sx={{ flex: 1, pr: [0, 10], mb: [4, 0] }}>
          <HeadingFade>
              <Heading
                as="h1"
                sx={{ fontSize: "4rem" }}
                color="white"
                textalign="center"
                mb={4}
              >
                Discuss your needs with us
              </Heading>
            </HeadingFade>
            <HeadingFade delay={500}>
              <p
                sx={{
                  color: "heading",
                  fontSize: ["14px", null, "18px"],
                  lineHeight: [1.86, null, 2.2],
                  mt: [5],
                  maxWidth: 610,
                  color: "white",
                }}
              >
                Built for every team across your company, RGS Data-Platform
                boosts productivity with upgraded security and account support.
                Contact us today to unlock:
              </p>
            </HeadingFade>
            <Flex sx={{ alignItems: "center", mt: 4 }}>
              <HeadingFade delay={700}>
                <Box
                  sx={{
                    background: "#fff",
                    p: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    borderRadius: "100%",
                    mr: 4,
                  }}
                >
                  <Computer sx={{ color: "#4b42ad" }} size={30} />
                </Box>
              </HeadingFade>
              <HeadingFade delay={900}>
                <Text
                  sx={{ fontSize: "17px", fontWeight: "bold" }}
                  color="white"
                >
                  Manage your data and generate insights
                </Text>
              </HeadingFade>
            </Flex>
            <Flex sx={{ alignItems: "center", mt: 4 }}>
              <HeadingFade delay={1100}>
                <Box
                  sx={{
                    background: "#fff",
                    p: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    borderRadius: "100%",
                    mr: 4,
                  }}
                >
                  <ScreenShare sx={{ color: "#4b42ad" }} size={30} />
                </Box>{" "}
              </HeadingFade>
              <HeadingFade delay={1300}>
                <Text
                  sx={{ fontSize: "17px", fontWeight: "bold" }}
                  color="white"
                >
                  Visualize your insigt on your fingertips <br />
                  and increase your revenue
                </Text>
              </HeadingFade>
            </Flex>
            <Flex sx={{ alignItems: "center", mt: 4 }}>
              <HeadingFade delay={1500}>
                <Box
                  sx={{
                    background: "#fff",
                    p: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    borderRadius: "100%",
                    mr: 4,
                  }}
                >
                  <Share sx={{ color: "#4b42ad" }} size={30} />
                </Box>
              </HeadingFade>
              <HeadingFade delay={1700}>
                <Text
                  sx={{ fontSize: "17px", fontWeight: "bold" }}
                  color="white"
                >
                  Easily Upload & Export your data easily from dashboard
                </Text>
              </HeadingFade>
            </Flex>
            <HeadingFade delay={1900}>
              <Box sx={{ mt: 5 }}>
                <Image
                  src="/images/white_logo.png"
                  alt="Company Logo"
                  width={170}
                  height={170}
                />
              </Box>
            </HeadingFade>
          </Box>

          {/* Right Side */}
          <Box sx={{ flex: 1, pl: [0, 4] }}>
            <HeadingFade>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: [10, 11],
                  borderRadius: "40px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                <form>
                  <HeadingFade delay={500}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    />
                  </HeadingFade>

                  <HeadingFade delay={600}>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    />
                  </HeadingFade>
                  <HeadingFade delay={700}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Company Email"
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    />
                  </HeadingFade>
                  <HeadingFade delay={800}>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    />
                  </HeadingFade>
                  <HeadingFade delay={900}>
                    <Input
                      type="text"
                      name="size"
                      placeholder="Company Size"
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    />
                  </HeadingFade>
                  <HeadingFade delay={1000}>
                    <Input
                      type="text"
                      name="size"
                      placeholder="What does you company does?"
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    />
                  </HeadingFade>
                  <HeadingFade delay={1100}>
                    <Select
                      name="company-do"
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    >
                      <option value="">How can we help?</option>
                      <option value="evaluate">
                        Evaluate my RGS Data Platform for my company
                      </option>
                      <option value="quotation">Get quotation</option>
                      <option value="how-to">
                        How to use the RGS Data Platform
                      </option>
                      <option value="other">Other</option>
                    </Select>
                  </HeadingFade>
                  <HeadingFade delay={1200}>
                    <Textarea
                      name="need"
                      placeholder="Describe your need"
                      rows={4}
                      mb={3}
                      sx={{ borderRadius: "4px" }}
                    />
                  </HeadingFade>
                  <HeadingFade delay={1300}>
                    <div sx={{ display: "flex", alignItems: "center", my: 5 }}>
                      <Checkbox mb={3} />
                      <Text variant="styles.small" color="gray">
                        I agree to RGS Technologie's Terms of Service and
                        Privacy Policy.
                      </Text>
                    </div>
                  </HeadingFade>
                  <HeadingFade delay={1400}>
                    <Button
                      type="submit"
                      variant="primary"
                      sx={{ borderRadius: "4px" }}
                    >
                      Submit
                    </Button>
                  </HeadingFade>
                </form>
              </Box>
            </HeadingFade>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ContactForm;
