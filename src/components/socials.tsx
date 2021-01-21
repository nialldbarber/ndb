import React, {FC} from 'react';
import {SITE, socialLinks} from 'constants/theme';
import {getCurrentYear} from 'utils/config';
import {
  SocialContainer,
  SocialIconContainer,
  SocialIcon,
  Copyright,
} from 'styles/components/socials';

const Socials: FC = () => {
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
