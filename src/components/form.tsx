import React, {FC, useState, FormEvent} from 'react';
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

const Form: FC = () => {
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

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </label>
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
};

export default Form;
