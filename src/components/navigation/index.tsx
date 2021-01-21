import React, {FC, useState} from 'react';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';
import Hamburger from 'components/navigation/hamburger';
import {getCycledColors} from 'utils/animations';
import {Logo} from 'styles/components/navigation';

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
