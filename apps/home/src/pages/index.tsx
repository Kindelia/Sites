import Head from 'next/head';
import {Footer, LogoIcon} from 'ui';
import {Menu} from '../components/Menu';

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Kindelia Foundation</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-4 pt-12 lg:px-8">
        <div className="flex cursor-pointer">
          <LogoIcon className="h-[327px] w-[355px] active:animate-bounce" />
        </div>
        <Menu />
      </main>

      <Footer />
    </div>
  );
}
