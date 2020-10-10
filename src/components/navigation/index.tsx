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
    font-size: 2.5rem;
    transition: 0.2s ease;

    span {
      position: relative;
      color: ${({theme}) => theme?.colors?.black};
    }
  }
`;

const Navigation: FC = () => {
  const {pathname} = useLocation();

  console.log(pathname === '/');

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
