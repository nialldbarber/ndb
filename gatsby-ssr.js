import React from 'react';
import MainLayout from './src/components/layouts/main';

export const wrapPageElement = ({element, props}) => {
  return <MainLayout {...props}>{element}</MainLayout>;
};
