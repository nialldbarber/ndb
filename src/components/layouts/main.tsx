import React, {FC} from 'react';
import {PageProps} from 'gatsby';
import {useLocation} from '@reach/router';
import {AnimatePresence} from 'framer-motion';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/config/state';
import Header from 'components/navigation/header';
import Footer from 'components/footer';
import {GlobalStyle, Normalise} from 'styles/base';
import 'typeface-cabin';

const MainLayout: FC<PageProps> = ({children}) => {
  const {pathname} = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalise />
      <Header />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      {pathname === '/' ? null : <Footer />}
    </ThemeProvider>
  );
};

export default MainLayout;
