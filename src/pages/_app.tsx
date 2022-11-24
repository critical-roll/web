import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { enableStaticRendering } from 'mobx-react-lite';
import { SnackbarProvider } from 'notistack';
import { configure } from 'mobx';
import { RootStoreProvider } from '@common/stores';
import { SnackbarHandler } from '@common/components';
import { createEmotionCache, isBrowser } from '../common/utils';
import { theme } from '../theme';

import '../styles/home-page.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

enableStaticRendering(!isBrowser);

// Don't allow state modifications outside actions
configure({ enforceActions: 'observed' });

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <RootStoreProvider>
      <CacheProvider value={emotionCache}>
        <SnackbarProvider>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarHandler />
            <Component {...pageProps} />
          </ThemeProvider>
        </SnackbarProvider>
      </CacheProvider>
    </RootStoreProvider>
  );
}
