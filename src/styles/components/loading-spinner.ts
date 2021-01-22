import styled, {keyframes} from 'styled-components';

export const spinner = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;

  &:after {
    content: '';
    width: 12px;
    height: 12px;
    border: 3px solid ${({theme}) => theme.colors.white};
    border-top-color: ${({theme}) => theme.colors.green};
    border-radius: 50%;
    animation: ${spinner} 0.6s 0.1s ease-in-out infinite both;
  }
`;
