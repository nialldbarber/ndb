import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

interface HamburgerProps {}

const Burger = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
`;

const Hamburger: FC<HamburgerProps> = () => {
  return (
    <Burger initial={{x: 200}} animate={{x: 0}} transition={{delay: 0.2}}>
      <p>Hamburger!</p>
    </Burger>
  );
};

export default Hamburger;
