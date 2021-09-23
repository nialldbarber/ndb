import {motion} from 'framer-motion';
import styled from 'styled-components';

export const MenuBg = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    to right top,
    rgba(102, 204, 204, 0.2),
    rgba(249, 85, 132, 0.2),
    rgba(248, 155, 14, 0.2)
  );
  background-color: rgb(30, 39, 45);
  transform: translateZ(0);
  z-index: 3;
  border-radius: 100%;
  width: 350vmax;
  height: 350vmax;
  transform: translate(50%, -50%) scale(0);
  transition: transform 0.6s ease-out;

  &.active {
    transform: translate(50%, -50%) scale(1);
  }
`;
