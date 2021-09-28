import styled, {css, keyframes} from 'styled-components';
import {motion} from 'framer-motion';
import {media} from 'styles/config/media-queries';

const skillDefaults = css`
  padding: 0 0.5rem;
  border-radius: 4px;
  margin: 0 2px;
`;

export const SkillName = styled.span`
  &.react {
    background: var(--react);
    color: var(--white);
    ${skillDefaults};
  }
  &.vue {
    background: var(--vue);
    color: var(--black);
    ${skillDefaults};
  }
  &.svelte {
    background: var(--svelte);
    color: var(--white);
    ${skillDefaults};
  }
  &.js {
    background: var(--js);
    color: var(--black);
    ${skillDefaults};
  }
  &.ts {
    background: var(--ts);
    color: var(--white);
    ${skillDefaults};
  }
`;

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

export const PointDown = styled.div`
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

const filterBlur = keyframes`
  0% { filter: blur(0) }
  25% { filter: blur(2px) }
  50% { filter: blur(0) }
  75% { filter: blur(3px) }
  100% { filter: blur(0) }
`;

export const Sideways = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: center;
  left: -170px;
  bottom: 210px;
  transform: rotate(-90deg);
  z-index: 2;

  ${media.lessThan('tablet')`
    display: none;
  `};

  p {
    margin: 0;
    width: 240px;
    text-align: center;
    color: var(--pink);
    animation-name: ${filterBlur};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 1.7rem;
  bottom: 5.5rem;
  opacity: 0;
  z-index: -1;
  transition: var(--swoop-animation);

  &.visible {
    opacity: 1;
    z-index: 3;
  }

  button {
    background: var(--pink);
    border-radius: 5px;
  }

  img {
    width: 50px;
    height: auto;
  }
`;
