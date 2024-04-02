import Script from 'next/script';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          src="https://analytics.eu.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="lazyOnload"
        />
      )}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
