import React, {FC} from 'react';
import {Link} from 'gatsby';
import {motion} from 'framer-motion';
import styled from 'styled-components';

interface HomeNavItemsProps {}

const Items = styled(motion.ul)`
  z-index: 5;
`;

const ListItem = styled(motion.li)`
  position: absolute;

  a {
    position: relative;
    display: inline-block;
    font-size: 1.5rem;
    transform: scale(1);
    transition: 0.2s ease;

    &:after {
      content: '';
      position: absolute;
      top: -1rem;
      left: -1rem;
      bottom: -1rem;
      right: -1rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  &.bottom-left {
    bottom: 1rem;
    left: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.green};
    }
  }

  &.bottom-right {
    bottom: 1rem;
    right: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.orange};
    }
  }

  &.top-right {
    top: 1.5rem;
    right: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.pink};
    }
  }
`;

const HomeNavItems: FC<HomeNavItemsProps> = () => {
  return (
    <Items>
      {/* bottom left */}
      <ListItem
        initial={{x: -200}}
        animate={{x: 0}}
        transition={{delay: 0.2}}
        exit={{x: -200}}
        className="bottom-left"
      >
        <Link to="/about" activeClassName="active">
          about
        </Link>
      </ListItem>
      {/* bottom right */}
      <ListItem
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{delay: 0.2}}
        exit={{x: 200}}
        className="bottom-right"
      >
        <Link to="/contact" activeClassName="active">
          contact
        </Link>
      </ListItem>
      {/* top right */}
      <ListItem
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{delay: 0.2}}
        exit={{x: 200}}
        className="top-right"
      >
        <Link to="/all-posts" activeClassName="active">
          blog
        </Link>
      </ListItem>
    </Items>
  );
};

export default HomeNavItems;
