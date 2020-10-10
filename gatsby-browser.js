import React from 'react';
import {AnimatePresence} from 'framer-motion';
import MainLayout from './src/components/layouts/main';

const transitionDelay = 500;

export const wrapPageElement = ({element, props}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <MainLayout {...props}>{element}</MainLayout>
    </AnimatePresence>
  );
};

export const shouldUpdateScroll = ({
  routerProps: {location},
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};
