import * as React from "react";
import Head from "next/head";
import { SWRConfig } from "swr";
import PropTypes from "prop-types";
import { RecoilRoot } from "recoil";
import { CacheProvider } from "@emotion/react";
import { appWithTranslation } from "next-i18next";
import createEmotionCache from "../src/theme/createEmotionCache";
import AppLayout from "@layouts/app/AppLayout";
import WebsiteLayout from "@layouts/website/WebsiteLayout";

import "@styles/style.scss";
import "@styles/quill.css";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const isWebsiteLayout = ['/404', '/contact', '/terms-and-conditions', '/privacy-policy', '/', '/newsletter/unsubscribe/[id]'].includes(props.router.route);
  const isAuthLayout = ['/login', '/reset-password', '/reset-password/[token]', '/register'].includes(props.router.route);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Colorz</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        <RecoilRoot>
          {isWebsiteLayout ? (
            <WebsiteLayout>
              <Component {...pageProps} />
            </WebsiteLayout>
          ) : (
            <AppLayout isAuthLayout={isAuthLayout}>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </RecoilRoot>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
