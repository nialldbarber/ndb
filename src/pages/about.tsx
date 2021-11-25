import {useState, useEffect, useRef, MutableRefObject} from 'react';
import {motion} from 'framer-motion';
import useGoToTop from 'hooks/useGoToTop';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Skills from 'components/skills';
import Meta from 'components/helmet';
import Button from 'components/button';
import {PointDown, SkillName, Sideways, BackToTop} from 'styles/pages/about';
import {height, list} from 'utils/framer';
import {classNames} from 'utils/classNames';
import upArrow from '../../static/images/up.svg';

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
    scale: 3,
  },
};

export default function AboutPage() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [age, setAge] = useState<Date | number | null>(null);
  const {isVisible, scrollToTop} = useGoToTop();

  const handleScroll = () => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    function whatsMyAgeAgain() {
      const now = new Date();
      const then = new Date('04/04/2016');
      setAge((now - then) / 1000);
    }

    const interval = setInterval(() => {
      whatsMyAgeAgain();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Meta title="Niall Barber | About" />
      <Wrapper>
        <section>
          <motion.div
            variants={list}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <PageLayout title="about">
              <>
                <p>
                  Hey there! I’m a front end developer, specialising in{' '}
                  <SkillName className="react">React</SkillName>,{' '}
                  <SkillName className="vue">Vue</SkillName>,{' '}
                  <SkillName className="svelte">Svelte</SkillName> and...well,
                  actually really anything{' '}
                  <SkillName className="js">JavaScript</SkillName>/
                  <SkillName className="ts">Typescript</SkillName>
                  related <span>🤙</span>
                </p>

                <p>Check out some of the tech I've used in the past below!</p>

                <Sideways
                  initial={{x: -200, opacity: 0}}
                  animate={{x: 0, rotate: -90, opacity: 1}}
                  transition={{delay: 0.9}}
                >
                  Coding since <p>{age || 'xyzxyzxyz.xyz'}</p> seconds ago{' '}
                  <span>!</span>
                </Sideways>

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
        <BackToTop className={classNames(isVisible ? 'visible' : '')}>
          <Button action={() => scrollToTop()}>
            <img src={upArrow} alt="" />
          </Button>
        </BackToTop>
      </div>
    </>
  );
}
