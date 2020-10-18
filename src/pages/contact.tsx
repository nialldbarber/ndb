import React from 'react';
import {motion} from 'framer-motion';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import {list, height} from 'utils/framer';

// Dots
const start = {
  visible: {
    x: -300,
    y: -350,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
    scale: 6,
  },
  hidden: {
    y: -height,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
  exit: {
    y: height,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
};

const middle = {
  ...start,
  visible: {
    x: -338,
    y: 100,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.4,
    },
    scale: 2,
  },
};
const end = {
  ...start,
  visible: {
    x: 350,
    y: 100,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.5,
    },
    scale: 4,
  },
};

const ContactPage = () => {
  return (
    <Wrapper>
      <>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={list}
        >
          <PageLayout title="contact">
            <>
              <p>Contact form here...</p>
            </>
          </PageLayout>
        </motion.div>
        <Dots start={start} middle={middle} end={end} />
      </>
    </Wrapper>
  );
};

export default ContactPage;
