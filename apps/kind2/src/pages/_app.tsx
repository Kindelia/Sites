import '../styles/globals.css';
import 'ui/styles.css';

import type {AppProps} from 'next/app';
import { PublicLayout } from '../layouts/PublicLayout';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <PublicLayout title='test'>
      <Component {...pageProps} />
    </PublicLayout>
  )
}
