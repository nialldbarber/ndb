import styled from 'styled-components';
import {titleClamp} from 'styles/config/mixins';
import {media} from 'styles/config/media-queries';

export const Layout = styled.section`
  display: grid;
  grid-template-areas:
    'title title title-blank title-blank title-blank'
    'content-blank content-blank content content content';
  grid-template-rows: 3fr 4fr;
  height: calc(100vh - 30px);
  padding: 0 2rem;
  max-width: var(--max-width);
  margin: 0 auto;

  ${media.lessThan('tablet')`
    grid-template-areas:
      'title'
      'content';
  `};

  ${media.lessThan('phablet')`
    margin-top: -2rem;
    padding: 0 1.5rem;
  `};

  p {
    font-weight: 400;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  align-self: end;
  margin: 0;
  max-width: 330px;
  min-height: 0vw;
  ${titleClamp};
  white-space: nowrap;

  &.post {
    font-size: 5rem;
  }

  &.pink {
    color: var(--pink);
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

    ${media.lessThan('tablet')`
      font-size: 1.5rem;
    `};

    ${media.lessThan('phablet')`
      font-size: 1.3rem;
    `};
  }
`;
