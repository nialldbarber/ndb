import React, {useRef} from 'react';
import {motion} from 'framer-motion';
import useStore from 'store';
import useDimensions from 'hooks/useDimensions';
import MenuItems from 'components/navigation/menu-items';
import NavBg from 'components/navigation/nav-background';
import {Burger, SpanBurger} from 'styles/components/navigation/hamburger';
import {MENU} from 'constants/theme';

function Hamburger() {
  const containerRef = useRef<HTMLInputElement>(null);
  const {isMenuOpen, toggleMenu} = useStore();
  const {height} = useDimensions(containerRef);
  const menuOpen: string = isMenuOpen ? MENU.OPEN : MENU.CLOSED;

  return (
    <motion.nav
      initial={false}
      animate={menuOpen}
      custom={height}
      ref={containerRef}
      className={menuOpen}
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
    </motion.nav>
  );
}

export default Hamburger;
