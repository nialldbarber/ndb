import React, {FC} from 'react';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';
import styled from 'styled-components';
import Hamburger from 'components/navigation/hamburger';

const Logo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.5rem;

  a {
    position: relative;
    font-size: 2.5rem;
    transition: 0.2s ease;

    &:after {
      content: '';
      position: absolute;
      top: -1.5rem;
      left: -1.5rem;
      bottom: -1.5rem;
      right: -1.5rem;
    }

    span {
      position: relative;
      color: ${({theme}) => theme?.colors?.black};
    }
  }
`;

const Navigation: FC = () => {
  const {pathname} = useLocation();

  return (
    <>
      <Logo>
        <Link to="/" activeClassName="active">
          <span>{'{ ... }'}</span>
        </Link>
      </Logo>
      {pathname === '/' ? null : <Hamburger />}
    </>
  );
};

export default Navigation;
