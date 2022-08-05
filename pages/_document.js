import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         <link href='https://fonts.googleapis.com/css?family=PT+Sans:Bold 900' rel='stylesheet' type='text/css'></link>
         <link href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet' type='text/css'></link>
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