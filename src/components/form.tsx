import React from 'react';
import {TextField, Button} from '@material-ui/core';
import useForm from 'hooks/useForm';
import LoadingSpinner from 'components/loading-spinner';
import {FormContainer} from 'styles/components/form';
import {theme} from 'styles/config/state';

export default function Form() {
  const {
    status,
    inputs,
    honeypot,
    handleOnChange,
    handleOnSubmit,
    handleHoneyPost,
  } = useForm();

  return (
    <div>
      <FormContainer onSubmit={handleOnSubmit}>
        <TextField
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          label="Email"
          required
          value={inputs.email}
          variant="outlined"
        />
        <TextField
          id="message"
          name="message"
          onChange={handleOnChange}
          label="Enter a message"
          required
          multiline
          rows={7}
          value={inputs.message}
          variant="outlined"
        />
        <input
          style={{display: 'none'}}
          type="checkbox"
          checked={honeypot}
          onChange={handleHoneyPost}
        />
        <Button
          type="submit"
          disabled={status.submitting}
          variant="outlined"
          style={{background: theme.colors.green, height: 36}}
        >
          {!status.submitting ? (
            !status.submitted ? (
              'Submit'
            ) : (
              'Submitted'
            )
          ) : (
            <LoadingSpinner />
          )}
        </Button>
      </FormContainer>
    </div>
  );
}
