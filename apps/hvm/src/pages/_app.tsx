import '../styles/globals.css';
import 'ui/styles.css';

import type {AppProps} from 'next/app';
import {PublicLayout} from '../layouts/PublicLayout';
import {DocLayout} from '../layouts/DocLayout';
import {useRouter} from 'next/router';

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  const Layout = router.pathname.includes('/docs') ? DocLayout : PublicLayout;

  return (
    <Layout title="Kind2 | Kindelia">
      <Component {...pageProps} />
    </Layout>
  );
}
