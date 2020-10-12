import React from 'react';
import {motion} from 'framer-motion';
import styled, {keyframes} from 'styled-components';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import {list} from 'pages/index';

const height = window.innerHeight;

// Dots
const start = {
  visible: {
    x: -300,
    y: -300,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
    scale: 5,
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
    x: -40,
    y: -120,
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
    x: 220,
    y: 50,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.5,
    },
    scale: 5,
  },
};

const shake = keyframes`
  0% { transform: translate(0,0) rotate(0) }
  1.78571% { transform: translate(5px,0) rotate(-10deg) }
  3.57143% { transform: translate(0,0) }
  5.35714% { transform: translate(5px,0) rotate(10deg) }
  7.14286% { transform: translate(0,0) }
  8.92857% { transform: translate(5px,0) }
  10.71429% { transform: translate(0,0) }
  100% { transform: translate(0,0) }
`;

const HangTenDude = styled.span`
  display: inline-block;
  animation-name: ${shake};
  animation-duration: 4.72s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={list}
        >
          <PageLayout title="about">
            <>
              <p>
                Hey there! I’m a front end developer, specialising in React and
                Vue...well, actually really anything JavaScript related{' '}
                <HangTenDude>
                  <span>🤙</span>
                </HangTenDude>
              </p>

              <p>
                My journey started the way most do; when I made my MySpace{' '}
                <code>background-color: black</code> and since that day I’ve
                never looked back
              </p>
            </>
          </PageLayout>
        </motion.div>
        <Dots start={start} middle={middle} end={end} />
      </>
    </Wrapper>
  );
};

export default AboutPage;
