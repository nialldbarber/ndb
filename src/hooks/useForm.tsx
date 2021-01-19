import {useState, FormEvent} from 'react';
import axios from 'axios';
import {FORM_ENDPOINT} from 'utils/config';

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

const useForm = (): any => {
  const [honeypot, setHoneypot] = useState<boolean>(true);
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
    } else {
      setStatus({
        info: {error: true, msg},
      });
    }
  };

  const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
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
  };

  return {
    status,
    inputs,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useForm;
