import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import useStore from 'store';
import Socials from 'components/socials';

interface FooterProps {}

const FooterWrapper = styled(motion.footer)`
  position: fixed;
  display: flex;
  bottom: 1rem;
  right: 1.5rem;
  z-index: 1;
`;

const Footer: FC<FooterProps> = () => {
  const {isMenuOpen} = useStore();

  return !isMenuOpen ? (
    <FooterWrapper
      initial={{x: 200}}
      animate={{x: 0}}
      transition={{delay: 0.2}}
    >
      <Socials />
    </FooterWrapper>
  ) : null;
};

export default Footer;
