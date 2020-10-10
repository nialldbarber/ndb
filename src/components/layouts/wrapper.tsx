import React, {FC, ReactChild} from 'react';
import {motion} from 'framer-motion';

interface WrapperProps {
  children: ReactChild;
}

// const duration = 0.5;

// const variants = {
//   initial: {
//     opacity: 0,
//   },
//   enter: {
//     opacity: 1,
//     transition: {
//       duration: duration,
//       delay: duration,
//       when: 'beforeChildren',
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {duration: duration},
//   },
// };

const Wrapper: FC<WrapperProps> = ({children}) => {
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
