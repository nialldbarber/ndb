import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import useLockBodyScroll from 'hooks/useLockBodyScroll';

interface NavBgProps {}

const MenuBg = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right top,
    rgba(102, 204, 204, 0.2),
    rgba(249, 85, 132, 0.2),
    rgba(248, 155, 14, 0.2)
  );
  background-color: rgb(30, 39, 45);
  transform: translateZ(0);
  z-index: 3;
`;

const NavBg: FC<NavBgProps> = () => {
  useLockBodyScroll();

  return <MenuBg />;
};

export default NavBg;
