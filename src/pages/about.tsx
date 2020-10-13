import React, {useRef} from 'react';
import {motion} from 'framer-motion';
import styled, {keyframes} from 'styled-components';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Skills from 'components/skills';
import {height, list} from 'utils/framer';

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

const shakeUp = keyframes`
  0% { transform: translateY(0) } 
  1.78571% { transform: translateY(5px) }
  3.57143% { transform: translateY(0) }
  5.35714% { transform: translateY(5px) }
  7.14286% { transform: translateY(0) }
  8.92857% { transform: translateY(5px) }
  10.71429% { transform: translateY(0) }
  100% { transform: translateY(0) }
`;

const PointDown = styled.div`
  position: absolute;
  top: calc(100vh - 150px);
  left: 50%;
  transform: translateX(-50%);
  animation-name: ${shakeUp};
  animation-duration: 4.72s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  z-index: 1;
  cursor: pointer;

  p {
    font-size: 3rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AboutPage = () => {
  const ref = useRef<HTMLInputElement>();

  const handleScroll = () => {
    console.log('Clicked');
    ref.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <Wrapper>
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={list}
          >
            <PageLayout title="about">
              <>
                <p>
                  Hey there! I’m a front end developer, specialising in React
                  and Vue...well, actually really anything JavaScript related{' '}
                  <span>🤙</span>
                </p>

                <p>Check out some of my skills below!</p>

                <PointDown onClick={handleScroll}>
                  <p>👇</p>
                </PointDown>
              </>
            </PageLayout>
          </motion.div>
          <Dots start={start} middle={middle} end={end} />
        </section>
      </Wrapper>
      <div ref={ref}>
        <Wrapper>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={list}
          >
            <Skills />
          </motion.div>
        </Wrapper>
      </div>
    </>
  );
};

export default AboutPage;
