import Head from 'next/head';
import {Footer, LogoIcon} from 'ui';
import {Menu} from '../components/Menu';

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Kindelia Foundation</title>
      </Head>

      <main className="mx-auto flex w-auto flex-col items-center px-4 pt-12 lg:px-8">
        <div className="mb-36 flex cursor-pointer">
          <LogoIcon className='w-[355px] h-[327px] active:animate-bounce' />
        </div>
        <Menu />
      </main>
      
      <Footer />
    </div>
  );
}
