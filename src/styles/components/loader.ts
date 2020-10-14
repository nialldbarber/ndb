import styled, {keyframes} from 'styled-components';
import {rgba} from 'polished';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderSpinner = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${rgba('#111', 0.2)};
  margin: 0 auto;
  &.loader {
    border: 2px solid ${rgba('#111', 0.4)};
    border-top-color: ${({theme}) => theme.colors.white};
    animation: ${spinner} 600ms linear infinite;
  }
`;

export {LoaderSpinner};
