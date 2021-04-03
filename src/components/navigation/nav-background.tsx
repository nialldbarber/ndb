import React from 'react';
import useLockBodyScroll from 'hooks/useLockBodyScroll';
import {MenuBg} from 'styles/components/navigation/nav-background';

function NavBg() {
  useLockBodyScroll();
  return <MenuBg />;
}

export default NavBg;
