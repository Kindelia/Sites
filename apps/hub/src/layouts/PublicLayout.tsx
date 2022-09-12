import Head from 'next/head';
import {Footer} from 'ui';

import {Navbar} from '../components/Navbar';

export type PublicLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function PublicLayout(props: PublicLayoutProps): JSX.Element {
  const {children, title} = props;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{title} | Kindelia Hub</title>
      </Head>

      <Navbar />

      {children}
      <Footer />
    </div>
  );
}
