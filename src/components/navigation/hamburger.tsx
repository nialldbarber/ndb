import {useRef} from 'react';
import {useLocation} from '@reach/router';
import {motion} from 'framer-motion';
import useStore from 'store';
import useDimensions from 'hooks/useDimensions';
import {classNames} from 'utils/classNames';
import Button from 'components/button';
import MenuItems from 'components/navigation/menu-items';
import NavBg from 'components/navigation/nav-background';
import {Nav, SpanBurger} from 'styles/components/navigation/hamburger';
import {MENU} from 'constants/theme';

export default function Hamburger() {
  const {pathname} = useLocation();
  const containerRef = useRef<HTMLElement>(null);
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
      <Button className="burger" label="Open menu" strippedStyled>
        <motion.div
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{delay: 0.2}}
        >
          <SpanBurger className={menuOpen} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </SpanBurger>
        </motion.div>
      </Button>
      <NavBg className={isMenuOpen ? 'active' : ''} />
      <MenuItems />
    </Nav>
  );
}
