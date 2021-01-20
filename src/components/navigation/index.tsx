import React, {FC, useState} from 'react';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';
import styled from 'styled-components';
import Hamburger from 'components/navigation/hamburger';
import {getCycledColors} from 'utils/animations';

const Logo = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 2;

  &.green {
    span {
      color: ${({theme}) => theme.colors.green};
    }
  }
  &.orange {
    span {
      color: ${({theme}) => theme.colors.orange};
    }
  }
  &.pink {
    span {
      color: ${({theme}) => theme.colors.pink};
    }
  }

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
      color: ${({theme}) => theme.colors.white};
      transition: 0.2s ease;
    }
  }
`;

const Navigation: FC = () => {
  const {pathname} = useLocation();
  const [color, setColor] = useState('');

  return (
    <>
      <Logo
        onMouseEnter={() => setColor(getCycledColors.increment())}
        className={color || ''}
      >
        <Link to="/" activeClassName="active">
          <span>{'{ ... }'}</span>
        </Link>
      </Logo>
      {pathname === '/' ? null : <Hamburger />}
    </>
  );
};

export default Navigation;
