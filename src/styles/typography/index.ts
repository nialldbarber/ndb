import {motion} from 'framer-motion';
import styled from 'styled-components';
import {media} from 'styles/config/media-queries';

export const PageTitle = styled(motion.h1)`
  display: flex;
  margin: 0;
  font-size: 6.5rem;
  text-align: center;

  ${media.lessThan('phablet')`
    font-size: 3.5rem;
  `};

  ${media.greaterThan('extraLarge')`
    font-size: 10rem;
  `};

  ${media.greaterThan('desktop')`
    font-size: 8.4rem;
  `};

  p {
    display: flex;
    margin: 0;
  }
`;

export const FirstName = styled(motion.span)`
  margin: 0;
  padding-right: 1.3rem;

  ${media.lessThan('phablet')`
  padding-right: 0.7rem;
  `};
`;

export const LastName = styled(motion.span)`
  margin: 0;
`;

export const SubHeader = styled(motion.h3)`
  margin: 0;
  font-size: 3.2rem;
  margin-top: -2.5rem;

  ${media.lessThan('phablet')`
    font-size: 1.7rem;
    margin-top: -0.8rem;
  `};

  ${media.greaterThan('extraLarge')`
    font-size: 8.4rem;
  `};

  ${media.greaterThan('desktop')`
    font-size: 4.1rem;
  `};
`;
