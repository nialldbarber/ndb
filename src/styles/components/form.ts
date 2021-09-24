import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  background: var(--darker-black);
  padding: 1.5rem 2rem 0.5rem;
  border-radius: 5px;
  min-height: 350px;

  label,
  input,
  textarea {
    color: var(--white);
  }

  button {
    align-self: center;
    max-width: 150px;
  }
`;
