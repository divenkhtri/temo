/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container } from 'theme-ui';
import SectionHeading from '../section-heading';
import Image from '../image';


const TechStack = () => {
  return (
    <section id="clients" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Company who also worked us"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          learnMore="Explore Details"
        />
        <Flex as="figure" sx={styles.illustration}>
          <Image src={'/images/techused/clients.svg'} alt="clients" />
        </Flex>
      </Container>
    </section>
  );
};

export default TechStack;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [3, null, null, 0],
  },
};
