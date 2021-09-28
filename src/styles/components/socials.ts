import {motion} from 'framer-motion';
import styled from 'styled-components';
import {transition} from 'styles/config/vars';

export const SocialContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 138px;

  &.home {
    text-align: center;

    .home-social {
      &:last-child {
        margin-right: 0.5rem;
      }
    }
  }
`;

export const SocialIconContainer = styled(motion.div)`
  display: flex;
`;

export const SocialIcon = styled(motion.div)`
  display: flex;
  margin: 0 0.5rem;
  transform: scale(1);
  transition: ${transition};

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
  text-align: center;
`;
