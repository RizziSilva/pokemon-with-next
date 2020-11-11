import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='title' content='Um titulo legal' />
          <meta name='description' content='Uma descrição legal' />
          <link
            href='https://fonts.googleapis.com/css2?family=Anton&family=Heebo:wght@300&display=swap'
            rel='stylesheet'
          />
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
