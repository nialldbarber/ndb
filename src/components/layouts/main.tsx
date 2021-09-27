import {useEffect, useLayoutEffect} from 'react';
import {PageProps} from 'gatsby';
import ReactGa from 'react-ga';
import {useLocation} from '@reach/router';
import {AnimatePresence} from 'framer-motion';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/config/state';
import Navigation from 'components/navigation';
import Footer from 'components/footer';
import {GlobalStyle, Normalise} from 'styles/base';
import 'typeface-cabin';

export default function MainLayout({children}: PageProps) {
  const {pathname} = useLocation();

  useEffect(() => {
    ReactGa.initialize(process.env.GA_CODE);
    ReactGa.pageview('/');
  }, []);

  useLayoutEffect(() => {
    if (pathname === '/') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalise />
      <Navigation />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      {pathname === '/' ? null : <Footer />}
    </ThemeProvider>
  );
}
