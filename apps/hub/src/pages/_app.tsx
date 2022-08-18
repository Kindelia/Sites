import '../styles/globals.css';
import 'ui/styles.css';

import type {AppProps} from 'next/app';
import {IconContext} from 'ui';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    // @TODO: Remove in the future and put inside the UI
    <IconContext.Provider
      value={{
        size: '2rem',
        color: 'rgba(247, 243, 240, 0.5)',
      }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}
