import styled from 'styled-components';
import {motion} from 'framer-motion';

export const HomeBg = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  overflow: hidden;
`;

export const MainTitlesWrap = styled.div`
  position: fixed;
  top: 48.5%;
  transform: translateY(-50%);
`;

export const SocialContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;
