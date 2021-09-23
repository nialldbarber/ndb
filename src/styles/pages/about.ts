import styled, {css, keyframes} from 'styled-components';
import {media} from 'styles/config/media-queries';

const skillDefaults = css`
  padding: 0 0.5rem;
  border-radius: 4px;
  margin: 0 2px;
`;

export const SkillName = styled.span`
  &.react {
    background: ${({theme}) => theme.colors.react};
    color: ${({theme}) => theme.colors.white};
    ${skillDefaults};
  }
  &.vue {
    background: ${({theme}) => theme.colors.vue};
    color: ${({theme}) => theme.colors.black};
    ${skillDefaults};
  }
  &.js {
    background: ${({theme}) => theme.colors.js};
    color: ${({theme}) => theme.colors.black};
    ${skillDefaults};
  }
  &.ts {
    background: ${({theme}) => theme.colors.ts};
    color: ${({theme}) => theme.colors.white};
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

export const Sideways = styled.div`
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
    color: ${({theme}) => theme.colors.pink};
    animation-name: ${filterBlur};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;
