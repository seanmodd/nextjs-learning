import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
// import '@fontsource/poppins';
import { Provider } from 'next-auth/client';
import { theme, customTheme } from '../styles/theme';
import Navbar from '../components/auth/Navbar';

// import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
