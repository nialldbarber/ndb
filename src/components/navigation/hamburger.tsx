import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import useStore from 'store';
import MenuItems from 'components/navigation/menu-items';
import {MENU} from 'constants/theme';

interface HamburgerProps {}

const Burger = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1;
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
    background: ${({theme}) => theme?.colors?.black};
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
      background: ${({theme}) => theme?.colors?.white};

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

const MenuBg = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right top,
    rgba(102, 204, 204, 0.2),
    rgba(249, 85, 132, 0.2),
    rgba(248, 155, 14, 0.2)
  );
  background-color: rgb(30, 39, 45);
  transform: translateZ(0);
`;

const duration = 0.2;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {duration: duration},
  },
};

const Hamburger: FC<HamburgerProps> = () => {
  const {isMenuOpen, toggleMenu} = useStore();
  const menuOpen: string = isMenuOpen ? MENU.OPEN : MENU.CLOSED;

  return (
    <>
      <Burger initial={{x: 200}} animate={{x: 0}} transition={{delay: 0.2}}>
        <SpanBurger className={menuOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </SpanBurger>
      </Burger>
      {isMenuOpen && (
        <>
          <MenuBg
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          />
          <MenuItems />
        </>
      )}
    </>
  );
};

export default Hamburger;
