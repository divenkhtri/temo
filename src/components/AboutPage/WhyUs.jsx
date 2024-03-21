/** @jsxRuntime classic */

import React from 'react';
import { jsx, Box, Container, Heading, Text, Image } from 'theme-ui';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { rgba } from 'polished';
import { LearnMore } from '../link';

const data = [
  {
    id: 1,
    tabTitle: 'Why choose our service?',
    title: `We will turn your idea into a successful business model framework`,
    description: `Get your tests delivered at home. Collect samples from the victory of the managements that supply the best design system guidelines ever.`,
    moreLink: '#explore-more',
    image: '/images/tab-illustration-1.png',
    list: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
  {
    id: 2,
    tabTitle: 'Our business promise',
    title: `We will turn your idea into a successful business model framework`,
    description: `Get your tests delivered at home. Collect samples from the victory of the managements that supply the best design system guidelines ever.`,
    moreLink: '#explore-more',
    image: '/images/tab-illustration-1.png',
    list: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
  {
    id: 3,
    tabTitle: 'Our role model plan',
    title: `We will turn your idea into a successful business model framework`,
    description: `Get your tests delivered at home. Collect samples from the victory of the managements that supply the best design system guidelines ever.`,
    moreLink: '#explore-more',
    image: '/images/tab-illustration-1.png',
    list: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
];

const WhyUs = () => {
  return (
    <Box as="section" id="why-us" sx={styles.section}>
      <Container>
        <Box sx={styles.heading}>
          <Heading as="h2" sx={styles.headingText}>
            Why Choose Us?
          </Heading>
        </Box>
        {data?.map((item) => (
          <Box key={item.id} sx={styles.card}>
            <Box sx={styles.content}>
              <Heading as="h3" sx={styles.cardTitle}>
                {item.tabTitle}
              </Heading>
              <Text as="p" sx={styles.cardDescription}>
                {item.title}
              </Text>
              <Text as="p" sx={styles.cardDescription}>
                {item.description}
              </Text>
              <Box sx={styles.list}>
                {item.list.map((item, i) => (
                  <Box key={i} className="list-item" sx={styles.listItem}>
                    <RiCheckboxCircleFill color="#3FDBB1" size="20px" sx={styles.checkbox} />
                    <span>{item}</span>
                  </Box>
                ))}
              </Box>
              <Box sx={styles.learnMore}>
                <LearnMore path={item.moreLink} label="Explore more" />
              </Box>
            </Box>
            <Box sx={styles.imageContainer}>
              <Image src={item.image} alt="illustration" sx={styles.image} />
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default WhyUs;

const styles = {
  section: {
    pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11],
  },
  heading: {
    mb: 4,
    textAlign: 'center',
  },
  headingText: {
    fontSize: [24, null, null, 28],
    fontWeight: 'bold',
    lineHeight: 'heading',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column-reverse', null, null, 'row'],
    mb: [5, null, null, 7],
  },
  content: {
    flex: ['0 0 100%', null, null, '0 0 60%'],
    pr: [0, null, null, 6],
    textAlign: ['center', null, null, 'left'],
  },
  cardTitle: {
    fontSize: [20, null, null, 24],
    fontWeight: 'bold',
    mb: 3,
  },
  cardDescription: {
    fontSize: [16, null, null, 18],
    lineHeight: 'body',
    mb: 3,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    mb: 3,
  },
  listItem: {
    alignItems: 'center',
    fontSize: [16, null, null, 18],
    lineHeight: 'body',
    mr: [3, null, null, 4],
    mb: [2, null, null, 0],
  },
  checkbox: {
    mr: 2,
  },
  learnMore: {
    mt: 4,
    textAlign: 'center',
  },
  imageContainer: {
    flex: ['0 0 100%', null, null, '0 0 40%'],
    textAlign: ['center', null, null, 'right'],
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};
