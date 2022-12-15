import {ApolloProvider} from '@apollo/client';
import {CacheProvider} from '@emotion/react';
import SC, { StyledComponent } from '@emotion/styled';
import {CssBaseline, StyledComponentProps} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import Script from 'next/script';
import {appWithTranslation} from 'next-i18next';
import NextNprogress from 'nextjs-progressbar';
import React from 'react';

import nextI18NextConfig from '../../next-i18next.config.js';
import {Footer, Header} from '../components';
import {createEmotionCache} from '../helpers/createEmotionCache';
import {GA_MEASUREMENT_ID, pageview} from '../helpers/gtag';
import {withYM, YA_METRIKA_ID} from '../helpers/ym';
import {useApollo} from '../lib/apolloClient';
import {GlobalStyle} from '../styles';
import theme from '../styles/theme';

const clientSideEmotionCache = createEmotionCache();

const App = ({Component, emotionCache = clientSideEmotionCache, pageProps}) => {
  const apolloClient = useApollo(pageProps);
  const router = useRouter();

  let MainDiv = SC.div`
    max-width: 1680px;
    margin: 0 auto;
  `;

  if(router.route == '/') {
    MainDiv = SC.div`
      max-width: 1680px;
      margin: 0 auto;
      background-image: url(images/top_gradient.png);
      background-repeat: no-repeat;
    `;
  }
  
  React.useEffect(() => {
    const handleRouteChange = (url: string) => pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <GlobalStyle />
        <Head>
          <title>sacrill</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="yandex-verification" content="bed3ff7aa8f6b9a4" />
        </Head>
        <ThemeProvider theme={theme}>
          <MainDiv>
            <CssBaseline />
            <NextNprogress color="#73C371" startPosition={0.3} stopDelayMs={200} height={3} />
            <Component {...pageProps} />
            <Footer />
          </MainDiv>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

const AppYM = withYM(YA_METRIKA_ID, Router)(App);

export default appWithTranslation(AppYM, nextI18NextConfig);
