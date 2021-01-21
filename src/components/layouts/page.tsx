import React, {FC, ReactChild} from 'react';
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
