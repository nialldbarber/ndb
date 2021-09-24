import {PageProps} from 'gatsby';
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
