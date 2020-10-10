import React, {FC} from 'react';
import {motion} from 'framer-motion';
import HomeNavItems from 'components/navigation/home-nav-items';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import {HomeBg, TitleWrapper, MainTitlesWrap} from 'styles/pages/home';
import {PageTitle, FirstName, LastName, SubHeader} from 'styles/typography';

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {
    opacity: 0,
  },
};

const item = {
  visible: {opacity: 1, y: 0, stiffness: 1000, velocity: -100},
  hidden: {opacity: 0, y: 200, stiffness: 1000, velocity: -100},
  transition: {duration: 1, ...transition},
};

const subheader = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {
    opacity: 0,
  },
  transition: {duration: 1, ...transition, delay: 0.3},
};

const width = window.innerWidth;

// Dots
const start = {
  visible: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
  hidden: {
    x: -width,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {
    x: -width,
  },
};

const middle = {
  ...start,
  visible: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.4,
    },
  },
};
const end = {
  ...start,
  visible: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
};

const Home: FC = () => {
  return (
    <Wrapper>
      <>
        <HomeNavItems />
        <HomeBg>
          <MainTitlesWrap>
            <TitleWrapper>
              <PageTitle>
                <motion.span
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={list}
                  style={{display: 'flex', margin: 0}}
                >
                  <FirstName variants={item} style={{margin: 0}}>
                    niall
                  </FirstName>
                  <motion.p> </motion.p>
                  <LastName variants={item} style={{margin: 0}}>
                    barber
                  </LastName>
                </motion.span>
              </PageTitle>
            </TitleWrapper>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={subheader}
            >
              <SubHeader>
                {'<'}front end developer{' />'}
              </SubHeader>
            </motion.div>
          </MainTitlesWrap>
        </HomeBg>
        <Dots start={start} middle={middle} end={end} />
      </>
    </Wrapper>
  );
};

export default Home;
