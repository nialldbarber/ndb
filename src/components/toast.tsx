import React, {useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';
import useStore from 'store';
import {ToastWrapper, ToastContainer} from 'styles/components/toast';

const variants = {
  initial: {
    opacity: 0,
    y: -50,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.5,
  },
};

function Toast() {
  const {success, error, showSuccess, showError} = useStore();

  useEffect(() => {
    if (success || error) {
      const timeout = setTimeout(() => {
        showSuccess(false);
        showError(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [success, error, showSuccess, showError]);

  return (
    <ToastContainer>
      <AnimatePresence>
        {success && (
          <ToastWrapper
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="success"
          >
            Message sent!
          </ToastWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <ToastWrapper
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="error"
          >
            Oh no! Something went wrong
          </ToastWrapper>
        )}
      </AnimatePresence>
    </ToastContainer>
  );
}

export default Toast;
