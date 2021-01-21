import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {SITE, socialLinks} from 'constants/theme';
import {getCurrentYear} from 'utils/config';

interface SocialsProps {}

const SocialContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const SocialIconContainer = styled(motion.div)`
  display: flex;
`;

const SocialIcon = styled(motion.div)`
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

const Copyright = styled.span`
  font-weight: 400;
`;

const Socials: FC<SocialsProps> = () => {
  return (
    <SocialContainer>
      <SocialIconContainer>
        {socialLinks.map(({id, link, src, alt}) => (
          <SocialIcon key={id}>
            <a href={link} target="_blank" rel="noreferrer">
              <img src={src} alt={alt} />
            </a>
          </SocialIcon>
        ))}
      </SocialIconContainer>
      <Copyright>
        © {SITE.TITLE} {getCurrentYear()}
      </Copyright>
    </SocialContainer>
  );
};

export default Socials;
