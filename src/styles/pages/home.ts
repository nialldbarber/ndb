import {motion} from 'framer-motion';
import styled from 'styled-components';

const HomeBg = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  overflow: hidden;
`;

const MainTitlesWrap = styled.div`
  position: fixed;
  top: 48.5%;
  transform: translateY(-50%);
`;

const DotWrapper = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin-top: 0.5rem;
  transform: translateX(-50%) translateY(calc(-50% + 140px));
  z-index: -1;
`;

const Dot = styled(motion.div)`
  height: 30px;
  width: 30px;
  border-radius: 50%;

  &.start {
    background: ${({theme}) => theme?.colors?.green};
  }
  &.middle {
    background: ${({theme}) => theme?.colors?.orange};
  }
  &.end {
    background: ${({theme}) => theme?.colors?.pink};
  }
`;

export {HomeBg, TitleWrapper, MainTitlesWrap, Dot, DotWrapper};
