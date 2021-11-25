import React from 'react';
import {AnimatePresence} from 'framer-motion';
import MainLayout from './src/components/layouts/main';

console.log(
  '%c+',
  'font-size: 1px; padding: 80px 150px; line-height: 50px; background: url(https://c.tenor.com/Ry-jYCyu2O8AAAAd/mega64-hacking-in-progress.gif); background-size: 400px 250px; background-repeat: no-repeat; color: transparent;'
);

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
