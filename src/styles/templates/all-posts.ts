import styled from 'styled-components';
import {contentMargin} from 'styles/config/mixins';

export const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  ${contentMargin};
  max-width: ${({theme}) => theme.dimensions.maxWidth};
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 110px 1fr;
  height: 250px;
  padding: 1rem 1.5rem;
  background: ${({theme}) => theme.colors.darkerBlack};
  border-bottom-right-radius: 15px;
  color: ${({theme}) => theme.colors.white};
  transform: scale(1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  h3 {
    margin: 0;
    color: ${({theme}) => theme.colors.pink};
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 1.3rem;
  }
`;

export const BadgeContainer = styled.div`
  align-self: center;
`;

export const BadgeSelectContainer = styled.div`
  margin: 0 auto 150px;
  max-width: ${({theme}) => theme.dimensions.maxWidth};
`;
