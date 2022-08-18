import Head from 'next/head';
import { Button } from 'ui';
import {Footer, SVG, Link} from 'ui';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Hub - Kindelia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-mineshaft border-springwood flex h-16 w-full flex-row items-center justify-around border-b">
        <div className="flex flex-row items-center gap-7">
          <div className="h-9 w-10">
            <SVG type="logo" height={32} width={32} />
            {/* <text>Logo</text> */}
          </div>
          <Link href="" className="border-springwood border-b-2 text-base">
            Interact
          </Link>
          <Link href="" className="text-base">
            Blocks
          </Link>
          <Link href="" className="text-base">
            Functions
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Button>Default</Button>
          <img className="bg-springwood h-8 w-8 rounded-full" />
        </div>
      </nav>

      <main className="flex w-full flex-col">
        <div className="bg-mineshaft h-[538px] w-full">
          <div className="mt-10 flex items-center justify-center">
            <SVG type="logo" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
