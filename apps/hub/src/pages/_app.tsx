import '../styles/globals.css';
import 'ui/styles.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {chain, configureChains, createClient, WagmiConfig} from 'wagmi';
import {publicProvider} from 'wagmi/providers/public';

import type {AppProps} from 'next/app';
import {CommandMenu} from 'ui';

const {chains, provider} = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()],
);

const rainbowkitTheme = darkTheme({
  accentColor: '#7b3fe4',
  accentColorForeground: '#F7F3F0',
  borderRadius: 'small',
  fontStack: 'system',
  overlayBlur: 'small',
});

const {connectors} = getDefaultWallets({
  appName: 'Kindelia Hub App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={rainbowkitTheme}
            appInfo={{
              appName: 'Kindelia Hub',
              learnMoreUrl: 'https://hub.kindelia.org',
            }}
          >
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
      <CommandMenu key={"tesdtdasdas"} />
    </>
  );
}
