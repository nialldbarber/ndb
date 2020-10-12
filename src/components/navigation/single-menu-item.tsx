import React, {FC} from 'react';
import {Link} from 'gatsby';
import {motion} from 'framer-motion';
import {Items} from 'constants/theme';
import useStore from 'store';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

const SingleMenuItem: FC<Items> = ({url, name}) => {
  const {closeMenu} = useStore();

  return (
    <motion.li variants={variants}>
      <Link to={url || ''} activeClassName="active" onClick={closeMenu}>
        {name}
      </Link>
    </motion.li>
  );
};

export default SingleMenuItem;
