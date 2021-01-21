import React, {FC} from 'react';
import {motion, Variants} from 'framer-motion';
import styled from 'styled-components';
import HomeNavItems from 'components/navigation/home-nav-items';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Socials from 'components/socials';
import {HomeBg, TitleWrapper, MainTitlesWrap} from 'styles/pages/home';
import {PageTitle, FirstName, LastName, SubHeader} from 'styles/typography';
import {width, transition, list} from 'utils/framer';
import {SITE} from 'constants/theme';

const item: Variants | any = {
  visible: {
    opacity: 1,
    y: 0,
    stiffness: 1000,
    velocity: -100,
  },
  hidden: {
    opacity: 0,
    y: 200,
    stiffness: 1000,
    velocity: -100,
  },
  transition: {
    ...transition,
    duration: 1,
  },
};

const subheader: Variants | any = {
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
  transition: {...transition, duration: 1, delay: 0.3},
};

// Dots
const start: Variants | any = {
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

const middle: Variants | any = {
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

const end: Variants | any = {
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

const SocialContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

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
                {'<'}
                {SITE.SUB_TITLE}
                {' />'}
              </SubHeader>
            </motion.div>
          </MainTitlesWrap>
        </HomeBg>
        <Dots start={start} middle={middle} end={end} styleType="home" />
        <SocialContainer
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={subheader}
        >
          <Socials />
        </SocialContainer>
      </>
    </Wrapper>
  );
};

export default Home;
