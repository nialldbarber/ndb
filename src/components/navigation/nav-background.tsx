import React, {FC} from 'react';
import useLockBodyScroll from 'hooks/useLockBodyScroll';
import {MenuBg} from 'styles/components/navigation/nav-background';

const NavBg: FC = () => {
  useLockBodyScroll();

  return <MenuBg />;
};

export default NavBg;
