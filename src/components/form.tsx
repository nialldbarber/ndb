import React, {FC} from 'react';
import {TextField, Button} from '@material-ui/core';
import useStore from 'store';
import useForm from 'hooks/useForm';
import {FormContainer} from 'styles/components/form';
import {theme} from 'styles/config/state';

// loading spinner for button
// toast message for success

const Form: FC = () => {
  const {error, success} = useStore();
  const {status, inputs, handleOnChange, handleOnSubmit} = useForm();

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
        <Button
          type="submit"
          disabled={status.submitting}
          variant="outlined"
          style={{background: theme.colors.green}}
        >
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </Button>
      </FormContainer>
      {error ? <p>ERROR!</p> : null}
      {success ? <p>SUCCESS!</p> : null}
    </div>
  );
};

export default Form;
