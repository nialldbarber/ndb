import React from 'react';
import {useLocation} from '@reach/router';
import {SITE, socialLinks} from 'constants/theme';
import {getCurrentYear} from 'utils/config';
import {
  SocialContainer,
  SocialIconContainer,
  SocialIcon,
  Copyright,
} from 'styles/components/socials';

export default function Socials() {
  const {pathname} = useLocation();
  const home = pathname === '/' ? 'home' : '';

  return (
    <SocialContainer className={home}>
      <SocialIconContainer>
        {socialLinks.map(({id, link, src, alt}) => (
          <SocialIcon key={id} className={`${home}-social`}>
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
}
