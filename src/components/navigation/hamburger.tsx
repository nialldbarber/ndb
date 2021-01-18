import React, {FC, useRef} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import useStore from 'store';
import MenuItems from 'components/navigation/menu-items';
import NavBg from 'components/navigation/nav-background';
import {MENU} from 'constants/theme';
import useDimensions from 'hooks/useDimensions';

interface HamburgerProps {}

const Burger = styled(motion.div)`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 4;
`;

const SpanBurger = styled.div`
  position: relative;
  margin: 0;
  width: 60px;
  height: 45px;
  transform: rotate(0deg) scale(0.5);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: ${({theme}) => theme.colors.pink};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 18px;
      transform-origin: left center;
    }

    :nth-child(3) {
      top: 36px;
      transform-origin: left center;
    }
  }

  &.open {
    span {
      background: ${({theme}) => theme.colors.white};

      &:nth-child(1) {
        transform: rotate(45deg);
        top: -3px;
        left: 8px;
      }

      &:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 39px;
        left: 8px;
      }
    }
  }
`;

const Hamburger: FC<HamburgerProps> = () => {
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
};

export default Hamburger;
