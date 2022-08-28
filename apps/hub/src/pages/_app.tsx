import '../styles/globals.css';
import 'ui/styles.css';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {theme} from 'tailwind-config/tailwind.config.js';
import {IconContext} from 'ui';

import type {AppProps} from 'next/app';
export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <IconContext.Provider
        value={{
          color: theme.extend.colors.springwood,
        }}
      >
        <Component {...pageProps} />
      </IconContext.Provider>
    </QueryClientProvider>
  );
}
