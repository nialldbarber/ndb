import styled from 'styled-components';
import {titleClamp} from 'styles/config/mixins';

export const Layout = styled.section`
  display: grid;
  grid-template-areas:
    'title title title-blank title-blank title-blank'
    'content-blank content-blank content content content';
  grid-template-rows: 3fr 4fr;
  height: 100vh;
  padding: 0 2rem;
  max-width: ${({theme}) => theme.dimensions.maxWidth};
  margin: 0 auto;

  p {
    font-weight: 400;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  align-self: end;
  margin: 0;
  max-width: 330px;
  ${titleClamp};
  white-space: nowrap;

  &.post {
    font-size: 5rem;
  }

  &.pink {
    color: ${({theme}) => theme.colors.pink};
  }
`;

export const TitleBlank = styled.div`
  grid-area: title-blank;
`;

export const ContentBlank = styled.div`
  grid-area: content-blank;
`;

export const Content = styled.div`
  grid-area: content;

  p {
    font-size: 2rem;
  }
`;
