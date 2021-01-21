import React, {FC} from 'react';
import {Link} from 'gatsby';
import {motion} from 'framer-motion';
import useStore from 'store';
import {Items} from 'constants/theme';

interface SingleMenuItemProps extends Items {
  styleType?: string;
}

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

const SingleMenuItem: FC<SingleMenuItemProps> = ({url, name, styleType}) => {
  const {closeMenu} = useStore();

  return (
    <motion.li variants={variants} className={styleType}>
      <Link to={url || ''} activeClassName="active" onClick={closeMenu}>
        {name}
      </Link>
    </motion.li>
  );
};

export default SingleMenuItem;
