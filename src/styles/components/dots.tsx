import {motion} from 'framer-motion';
import styled, {keyframes} from 'styled-components';
import {dotColors} from 'styles/config/mixins';
import {media} from 'styles/config/media-queries';

const circleSpinOne = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const circleSpinTwo = keyframes`
  from {
    transform: rotate(-144deg);
  }

  to {
    transform: rotate(216deg);
  }
`;

const circleSpinThree = keyframes`
  from {
    transform: rotate(216deg);
  }

  to {
    transform: rotate(-144deg);
  }
`;

export const DotWrapper = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 45%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin-top: 0.5rem;
  transform: translateX(-50%) translateY(calc(-50% + 140px));
  z-index: -1;

  ${media.lessThan('phablet')`
    top: 41%;
  `};

  ${media.greaterThan('extraLarge')`
    top: 50%;
  `};

  ${media.greaterThan('desktop')`
    top: 50%;
  `};
`;

export const PhysicalDot = styled(motion.div)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  opacity: 0.3;

  ${media.lessThan('phablet')`
    height: 20px;
    width: 20px;
  `};

  ${dotColors};
  &.home {
    opacity: 1;
  }
`;

export const DotInner = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate3D(-50%, -50%, 0);
`;

export const DotRipples = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 115% 132% 125% 124% / 125% 120% 127% 125%;

  ${dotColors};

  &:nth-child(1) {
    transform-origin: 50%-0.3% 50%;
    animation: ${circleSpinOne} 7s linear infinite;
  }

  &:nth-child(2) {
    transform-origin: 50% 50% + 0.3%;
    animation: ${circleSpinTwo} 4s linear infinite;
  }

  &:nth-child(3) {
    transform-origin: 50% + 0.3% 50%;
    animation: ${circleSpinThree} 5s linear infinite;
  }
`;
