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
          <LogoIcon className="h[193px] w-[207px] active:animate-bounce sm:h-[327px] sm:w-[355px]" />
        </div>
        <Menu />
      </main>

      <Footer />
    </div>
  );
}
