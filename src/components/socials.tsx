import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {socialLinks} from 'constants/theme';

interface SocialsProps {}

const SocialIcon = styled(motion.div)`
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

const Socials: FC<SocialsProps> = () => {
  return (
    <>
      {socialLinks.map(({id, link, src, alt}) => (
        <SocialIcon key={id}>
          <a href={link} target="_blank" rel="noopener">
            <img src={src} alt={alt} />
          </a>
        </SocialIcon>
      ))}
    </>
  );
};

export default Socials;
