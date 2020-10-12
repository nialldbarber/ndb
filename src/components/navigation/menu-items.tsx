import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import useStore from 'store';
import SingleMenuItem from 'components/navigation/single-menu-item';
import {navItems} from 'constants/theme';

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.3},
  },
  closed: {
    transition: {staggerChildren: 0.02, staggerDirection: -1},
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
      padding: 0.5rem;
      display: inline-block;
      text-align: center;
      color: #fff;
      font-size: 4rem;
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
