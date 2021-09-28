import {useEffect} from 'react';
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
    ReactGa.initialize('131583512-1');
    ReactGa.pageview('/');
  }, []);

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
