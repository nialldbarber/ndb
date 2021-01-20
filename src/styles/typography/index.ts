import {motion} from 'framer-motion';
import styled from 'styled-components';

export const PageTitle = styled(motion.h1)`
  display: flex;
  margin: 0;
  font-size: 8.4rem;
  text-align: center;

  p {
    display: flex;
    margin: 0;
  }
`;

export const FirstName = styled(motion.p)`
  margin: 0;
  padding-right: 1.3rem;
`;

export const LastName = styled(motion.p)`
  margin: 0;
`;

export const SubHeader = styled(motion.h3)`
  margin: 0;
  font-size: 4.1rem;
  margin-top: -2.5rem;
`;
