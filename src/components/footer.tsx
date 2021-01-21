import React, {FC} from 'react';
import useStore from 'store';
import Socials from 'components/socials';
import {FooterWrapper} from 'styles/components/footer';

const Footer: FC = () => {
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
