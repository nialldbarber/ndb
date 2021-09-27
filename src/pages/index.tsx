import {useLocation} from '@reach/router';
import {motion, Variants} from 'framer-motion';
import useLockBodyScroll from 'hooks/useLockBodyScroll';
import HomeNavItems from 'components/navigation/menu-items/home-nav-items';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Socials from 'components/socials';
import Meta from 'components/helmet';
import {width, transition, list} from 'utils/framer';
import {
  HomeBg,
  TitleWrapper,
  MainTitlesWrap,
  SocialContainer,
} from 'styles/pages/home';
import {PageTitle, FirstName, LastName, SubHeader} from 'styles/typography';
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

export default function Home() {
  useLockBodyScroll();
  const {pathname} = useLocation();
  const dots =
    pathname === '/' ? (
      <Dots start={start} middle={middle} end={end} styleType="home" />
    ) : null;

  return (
    <>
      <Meta title="Niall Barber" />
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
          {dots}
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
    </>
  );
}
