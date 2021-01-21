import {motion} from 'framer-motion';
import styled from 'styled-components';

export const SocialContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const SocialIconContainer = styled(motion.div)`
  display: flex;
`;

export const SocialIcon = styled(motion.div)`
  display: flex;
  margin: 0 0.5rem;
  transform: scale(1);
  transition: all 0.2s ease 0s;

  &:hover {
    transform: scale(1.1);
  }

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 30px;
  }
`;

export const Copyright = styled.span`
  font-weight: 400;
`;
