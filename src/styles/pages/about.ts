import styled, {keyframes} from 'styled-components';

export const SkillName = styled.span`
  &.react {
    color: ${({theme}) => theme.colors.react};
  }
  &.vue {
    color: ${({theme}) => theme.colors.vue};
  }
  &.js {
    color: ${({theme}) => theme.colors.js};
  }
  &.ts {
    color: ${({theme}) => theme.colors.ts};
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
