import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '~/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Next.js</title>

        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, Next.js and Styled Components"
        />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default App;
