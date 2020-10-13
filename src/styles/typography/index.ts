import {motion} from 'framer-motion';
import styled from 'styled-components';

const PageTitle = styled(motion.h1)`
  display: flex;
  margin: 0;
  font-size: 8.4rem;
  text-align: center;

  p {
    display: flex;
    margin: 0;
  }
`;

const FirstName = styled(motion.p)`
  margin: 0;
  padding-right: 1.3rem;
`;

const LastName = styled(motion.p)`
  margin: 0;
`;

const SubHeader = styled(motion.h3)`
  margin: 0;
  font-size: 4.1rem;
  margin-top: -2.5rem;
`;

export {PageTitle, FirstName, LastName, SubHeader};
