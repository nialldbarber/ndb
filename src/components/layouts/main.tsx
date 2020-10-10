import React, {FC} from 'react';
import {PageProps} from 'gatsby';
import {AnimatePresence} from 'framer-motion';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/config/state';
import Header from 'components/navigation/header';
import {GlobalStyle, Normalise} from 'styles/base';
import 'typeface-cabin';

const MainLayout: FC<PageProps> = ({children, location}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalise />
      <Header />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
    </ThemeProvider>
  );
};

export default MainLayout;
