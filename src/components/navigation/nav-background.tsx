import React from 'react';
import useLockBodyScroll from 'hooks/useLockBodyScroll';
import {MenuBg} from 'styles/components/navigation/nav-background';

function NavBg({className}: {className: string}) {
  // useLockBodyScroll();
  return <MenuBg className={className} />;
}

export default NavBg;
