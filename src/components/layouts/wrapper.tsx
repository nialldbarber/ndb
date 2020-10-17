import React, {FC, ReactChild} from 'react';
import {motion} from 'framer-motion';

interface WrapperProps {
  children: ReactChild;
}

const Wrapper: FC<WrapperProps> = ({children}) => {
  return (
    <motion.main
      key={location.pathname ?? Math.random()}
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
