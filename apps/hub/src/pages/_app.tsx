import '../styles/globals.css';
import 'ui/styles.css';

import type {AppProps} from 'next/app';
import {IconContext} from 'ui';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <IconContext.Provider
        value={{
          size: '2rem',
          color: 'rgba(247, 243, 240, 0.5)',
        }}
      >
        <Component {...pageProps} />
      </IconContext.Provider>
    </QueryClientProvider>
  );
}
