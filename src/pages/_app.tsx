import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate Next.JS</title>
        <link rel="shortcut icon" href="/assets/images/favicon/icon-192.png" />
        <link
          rel="apple-touch-icon"
          href="/assets/images/favicon/apple-touch-icon.png"
        />
        <meta
          name="description"
          content="A simple project starter to work with typescript, react, next.js and styled component"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
