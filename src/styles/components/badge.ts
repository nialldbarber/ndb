import styled from 'styled-components';

export const BadgeContainer = styled.span`
  margin: 0 0.3rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--pink);
  border-radius: 5px;
  cursor: pointer;

  span {
    color: var(--pink);
    font-size: 0.875rem;
  }
`;
