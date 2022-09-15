import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import pkg from '../../package.json';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html className="bg-[url('/shapelined.png')]">
        <Head>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <div className="hidden">{pkg.version}</div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
