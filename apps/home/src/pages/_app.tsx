import '../styles/globals.css';
import 'ui/styles.css';

import type {AppProps} from 'next/app';

export default function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
