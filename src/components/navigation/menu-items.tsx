import React, {FC} from 'react';
import {Link} from 'gatsby';
import {AnimatePresence, motion} from 'framer-motion';
import useStore from 'store';

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 1.3},
  },
  closed: {
    transition: {staggerChildren: 0.02, staggerDirection: -1},
  },
};

const MenuItems: FC = () => {
  const {isMenuOpen} = useStore();

  return (
    <AnimatePresence>
      <motion.ul
        variants={variants}
        initial="open"
        exit="closed"
        style={{position: 'fixed', zIndex: isMenuOpen ? 999 : -1}}
      >
        <motion.li>
          <Link to="/" activeClassName="active">
            home
          </Link>
        </motion.li>
        <motion.li>
          <Link to="/about" activeClassName="active">
            about
          </Link>
        </motion.li>
        <motion.li>
          <Link to="/blog" activeClassName="active">
            blog
          </Link>
        </motion.li>
        <motion.li>
          <Link to="/contact" activeClassName="active">
            contact
          </Link>
        </motion.li>
      </motion.ul>
    </AnimatePresence>
  );
};

export default MenuItems;
