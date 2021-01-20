import React, {FC} from 'react';
import {motion} from 'framer-motion';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Form from 'components/form';
import {list, height} from 'utils/framer';

// Dots
const start = {
  visible: {
    x: 300,
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
    x: -38,
    y: 140,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.4,
    },
    scale: 5,
  },
};
const end = {
  ...start,
  visible: {
    x: -450,
    y: -300,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.5,
    },
    scale: 10,
  },
};

const ContactPage: FC = () => {
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
            <Form />
          </PageLayout>
        </motion.div>
        <Dots start={start} middle={middle} end={end} />
      </>
    </Wrapper>
  );
};

export default ContactPage;
