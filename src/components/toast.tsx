import {useEffect} from 'react';
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

function ToastInner({
  toastState,
  type,
  message,
}: {
  toastState: boolean;
  type: string;
  message: string;
}) {
  return (
    <AnimatePresence>
      {toastState && (
        <ToastWrapper
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={type}
        >
          {message || ''}
        </ToastWrapper>
      )}
    </AnimatePresence>
  );
}

export default function Toast() {
  const {success, error, samePageToast, showSuccess, showError} = useStore();

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
      <ToastInner toastState={success} type="success" message="Message sent!" />
      <ToastInner
        toastState={error}
        type="error"
        message="Oh no! Something went wrong"
      />
      <ToastInner
        toastState={samePageToast}
        type="same-page"
        message="Ooops same page doofus!"
      />
    </ToastContainer>
  );
}
