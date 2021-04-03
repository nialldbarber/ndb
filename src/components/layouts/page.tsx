import React, {ReactChild} from 'react';
import {
  Layout,
  Title,
  TitleBlank,
  ContentBlank,
  Content,
} from 'styles/components/layouts/page';

interface PageLayoutProps {
  title: string;
  post?: boolean;
  color?: string;
  children: ReactChild;
}

function PageLayout({title, post, color, children}: PageLayoutProps) {
  return (
    <Layout>
      <Title className={`${post ? 'post' : ''} ${color || ''}`}>{title}</Title>
      <TitleBlank />
      <ContentBlank />
      <Content>{children}</Content>
    </Layout>
  );
}

export default PageLayout;
