import React, {useRef} from 'react';
import {useLocation} from '@reach/router';
import useStore from 'store';
import useDimensions from 'hooks/useDimensions';
import {classNames} from 'utils/classNames';
import MenuItems from 'components/navigation/menu-items';
import NavBg from 'components/navigation/nav-background';
import {Nav, Burger, SpanBurger} from 'styles/components/navigation/hamburger';
import {MENU} from 'constants/theme';

function Hamburger() {
  const {pathname} = useLocation();
  const containerRef = useRef<HTMLInputElement>(null);
  const {isMenuOpen, toggleMenu} = useStore();
  const {height} = useDimensions(containerRef);
  const menuOpen: string = isMenuOpen ? MENU.OPEN : MENU.CLOSED;
  const isHomePage = pathname === '/' ? 'home' : '';

  return (
    <Nav
      initial={false}
      animate={menuOpen}
      custom={height}
      ref={containerRef}
      className={classNames(menuOpen, isHomePage)}
    >
      <Burger initial={{x: 200}} animate={{x: 0}} transition={{delay: 0.2}}>
        <SpanBurger className={menuOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </SpanBurger>
      </Burger>
      {isMenuOpen && <NavBg />}
      <MenuItems />
    </Nav>
  );
}

export default Hamburger;
