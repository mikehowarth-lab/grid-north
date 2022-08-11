import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         <link href='https://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'></link>
         <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZDHP05LQ18"></script>
        <script>
            {`
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
             gtag('js', new Date());
                gtag('config', 'G-ZDHP05LQ18');
            `}
        </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument