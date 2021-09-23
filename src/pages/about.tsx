import React, {FC, useState, useEffect, useRef, MutableRefObject} from 'react';
import {motion} from 'framer-motion';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Skills from 'components/skills';
import {PointDown, SkillName, Sideways} from 'styles/pages/about';
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

const AboutPage: FC = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [age, setAge] = useState<Date | number | null>(null);

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
                  <SkillName className="react"> React </SkillName>
                  and <SkillName className="vue"> Vue</SkillName>...well,
                  actually really anything{' '}
                  <SkillName className="js">JavaScript</SkillName>/
                  <SkillName className="ts">Typescript </SkillName>
                  related <span>🤙</span>
                </p>

                <p>Check out some of the tech I use below!</p>

                <Sideways>
                  Coding since <p>{age}</p> seconds ago
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
      </div>
    </>
  );
};

export default AboutPage;
