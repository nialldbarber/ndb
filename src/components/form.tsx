import React, {FC} from 'react';
import useForm from 'hooks/useForm';

const Form: FC = () => {
  const {status, inputs, handleOnChange, handleOnSubmit} = useForm();

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
