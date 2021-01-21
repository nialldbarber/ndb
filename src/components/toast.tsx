import React, {FC, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import useStore from 'store';

const ToastWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  padding: 1rem;
  border-radius: 5px;

  &.success {
    background: ${({theme}) => theme.colors.green};
  }
  &.error {
    background: ${({theme}) => theme.colors.pink};
    width: 260px;
  }
`;

const ToastContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 1.6rem;
  right: 6rem;
  gap: 30px;
`;

const Toast: FC = () => {
  const {success, error, showSuccess, showError} = useStore();

  useEffect(() => {
    if (success || error) {
      const timeout = setTimeout(() => {
        showSuccess(false);
        showError(false);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [success, error, showSuccess, showError]);

  return (
    <ToastContainer>
      <AnimatePresence>
        {success && (
          <ToastWrapper
            layout
            initial={{opacity: 0, y: -50, scale: 0.3}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: -50, scale: 0.5}}
            className="success"
          >
            Message sent!
          </ToastWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <ToastWrapper
            layout
            initial={{opacity: 0, y: 50, scale: 0.3}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: -20, scale: 0.5}}
            className="error"
          >
            Oh no! Something went wrong
          </ToastWrapper>
        )}
      </AnimatePresence>
    </ToastContainer>
  );
};

export default Toast;
