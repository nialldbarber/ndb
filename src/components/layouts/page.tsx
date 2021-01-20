import React, {FC, ReactChild} from 'react';
import styled from 'styled-components';
import {titleClamp} from 'styles/config/mixins';

interface PageLayoutProps {
  title: string;
  post?: boolean;
  color?: string;
  children: ReactChild;
}

const Layout = styled.section`
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

const Title = styled.h1`
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

const TitleBlank = styled.div`
  grid-area: title-blank;
`;
const ContentBlank = styled.div`
  grid-area: content-blank;
`;

const Content = styled.div`
  grid-area: content;

  p {
    font-size: 2rem;
  }
`;

const PageLayout: FC<PageLayoutProps> = ({title, post, color, children}) => {
  return (
    <Layout>
      <Title className={`${post ? 'post' : ''} ${color || ''}`}>{title}</Title>
      <TitleBlank />
      <ContentBlank />
      <Content>{children}</Content>
    </Layout>
  );
};

export default PageLayout;
