import {ReactChild} from 'react';
import {Layout, Title, Content} from 'styles/components/layouts/page';

interface PageLayoutProps {
  title: string;
  post?: boolean;
  color?: string;
  children: ReactChild;
}

export default function PageLayout({
  title,
  post,
  color,
  children,
}: PageLayoutProps) {
  return (
    <Layout>
      <Title className={`${post ? 'post' : ''} ${color || ''}`}>{title}</Title>
      <Content>{children}</Content>
    </Layout>
  );
}
