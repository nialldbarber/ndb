import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {socialLinks} from 'constants/theme';
import useStore from 'store';

interface FooterProps {}

const FooterWrapper = styled(motion.footer)`
  position: fixed;
  display: flex;
  bottom: 1rem;
  right: 1.5rem;
  z-index: 1;
`;

const SocialIcon = styled(motion.div)`
  margin: 0 0.5rem;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 30px;
  }
`;

const Footer: FC<FooterProps> = () => {
  const {isMenuOpen} = useStore();

  return !isMenuOpen ? (
    <FooterWrapper
      initial={{x: 200}}
      animate={{x: 0}}
      transition={{delay: 0.2}}
    >
      {socialLinks.map(({id, link, src, alt}) => (
        <SocialIcon key={id}>
          <a href={link} target="_blank" rel="noopener">
            <img src={src} alt={alt} />
          </a>
        </SocialIcon>
      ))}
    </FooterWrapper>
  ) : null;
};

export default Footer;
