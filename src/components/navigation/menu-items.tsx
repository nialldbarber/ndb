import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import useStore from 'store';
import SingleMenuItem from 'components/navigation/single-menu-item';
import {navItems} from 'constants/theme';

const variants = {
  open: {
    opacity: 1,
    transition: {staggerChildren: 0.07, delayChildren: 0.3},
  },
  closed: {
    opacity: 0,
    transition: {staggerChildren: 0, staggerDirection: 0},
  },
};

const List = styled(motion.ul)`
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: -1;

  li {
    a {
      position: relative;
      padding: 0.5rem;
      display: inline-block;
      text-align: center;
      color: #fff;
      font-size: 4rem;

      &:before {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 0px;
        height: 3px;
        z-index: -1;
        border-radius: 2px;
        transform: translateX(-101%);
        background: rgb(102, 204, 204);
        transition: all 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s;
      }

      &:hover {
        &:before {
          left: 100%;
          width: 100%;
        }
      }
    }
  }

  &.open {
    z-index: 6;
  }
`;

const MenuItems: FC = () => {
  const {isMenuOpen} = useStore();

  return (
    <List variants={variants} className={isMenuOpen ? 'open' : ''}>
      {navItems.map(({id, url, name}) => (
        <SingleMenuItem key={id} url={url} name={name} />
      ))}
    </List>
  );
};

export default MenuItems;
