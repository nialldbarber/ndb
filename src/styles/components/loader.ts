import styled, {keyframes} from 'styled-components';
import {rgba} from 'polished';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderSpinner = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${rgba('var(--black)', 0.2)};
  margin: 0 auto;

  &.loader {
    border: 2px solid ${rgba('var(--black)', 0.4)};
    border-top-color: var(--white);
    animation: ${spinner} 600ms linear infinite;
  }
`;
