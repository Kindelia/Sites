import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html className="bg-[url('/shapelined.png')]">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
          type="text/css"
        />
      </Html>
    );
  }
}
