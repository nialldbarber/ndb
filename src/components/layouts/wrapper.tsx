import React, {FC, ReactChild} from 'react';
import {motion} from 'framer-motion';

interface WrapperProps {
  children: ReactChild;
  location: any
}

const Wrapper: FC<WrapperProps> = ({children, location}) => {
  return (
    <motion.main
      key={location.pathname}
      // variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.main>
  );
};

export default Wrapper;
