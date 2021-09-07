import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Samuel Rubens | About</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@5.2/distr/fira_code.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
