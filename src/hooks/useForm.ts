import {useState, FormEvent} from 'react';
import axios from 'axios';
import useStore from 'store';
import {FORM_ENDPOINT} from 'constants/theme';

interface Status {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: null;
  };
}

interface Inputs {
  email: string;
  message: string;
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  persist: () => void;
};

interface FormT {
  handleHoneyPost: () => void;
  handleOnChange: (e: HTMLElementEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
  honeypot: boolean;
  inputs: Inputs;
  status: Status;
}

export default function useForm(): FormT {
  const {showError, showSuccess} = useStore();
  const [honeypot, setHoneypot] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  });

  const [inputs, setInputs] = useState<Inputs>({
    email: '',
    message: '',
  });

  const handleServerResponse = (ok: boolean, msg: any): void => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {error: false, msg},
      });
      setInputs({
        email: '',
        message: '',
      });
      showSuccess(true);
      showError(false);
    } else {
      setStatus({
        info: {error: true, msg},
      });
      showSuccess(false);
      showError(true);
    }
  };

  const handleOnChange = (e: HTMLElementEvent<HTMLInputElement>): void => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: {error: false, msg: null},
    });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!honeypot) {
      setStatus((prevStatus) => ({...prevStatus, submitting: true}));
      axios({
        method: 'POST',
        url: FORM_ENDPOINT,
        data: inputs,
      })
        .then(() => {
          handleServerResponse(
            true,
            'Thank you, your message has been submitted.'
          );
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    }
  };

  const handleHoneyPost = (): void => setHoneypot(!honeypot);

  console.log({
    status,
    inputs,
    honeypot,
    handleOnChange,
    handleOnSubmit,
    handleHoneyPost,
  });

  return {
    status,
    inputs,
    honeypot,
    handleOnChange,
    handleOnSubmit,
    handleHoneyPost,
  };
}
