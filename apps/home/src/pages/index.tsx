import Head from 'next/head';
import {Footer, LogoIcon} from 'ui';
import {Menu} from '../components/Menu';

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Kindelia Foundation</title>
      </Head>

      <main className="mx-auto flex w-auto flex-col items-center px-4 pt-16 sm:pt-24 lg:px-8">
        <div className="mb-36 flex cursor-pointer">
          <LogoIcon className='w-4/5 h-4/5 active:animate-bounce' />
        </div>
        <Menu />
      </main>
      
      <Footer />
    </div>
  );
}
