import React, {useState} from 'react';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';
import Hamburger from 'components/navigation/hamburger';
import {getCycledColors} from 'utils/animations';
import {Logo} from 'styles/components/navigation';

function Navigation() {
  const {pathname} = useLocation();
  const [color, setColor] = useState('');

  return (
    <header>
      <Logo
        onMouseEnter={() => setColor(getCycledColors.increment())}
        className={color || ''}
      >
        <Link to="/" activeClassName="active">
          <span>{'{ ... }'}</span>
        </Link>
      </Logo>
      {pathname === '/' ? null : <Hamburger />}
    </header>
  );
}

export default Navigation;
