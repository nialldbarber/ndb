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
      color: ${({theme}) => theme.colors.white};
      font-size: 4rem;
      transition: 0.4s ease;
    }

    &.home {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.orange};
        }
      }
    }
    &.about {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.green};
        }
      }
    }
    &.blog {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.pink};
        }
      }
    }
    &.contact {
      a {
        &:hover {
          color: ${({theme}) => theme.colors.orange};
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
        <SingleMenuItem key={id} url={url} name={name} styleType={name} />
      ))}
    </List>
  );
};

export default MenuItems;
