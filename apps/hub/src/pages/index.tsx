import Head from 'next/head';
import {Button} from 'ui';
import {Footer, SVG, Link, Text} from 'ui';
import * as R from 'ramda';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Hub - Kindelia</title>
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
          <Button>Login</Button>
          <img className="bg-springwood h-8 w-8 rounded-full" />
        </div>
      </nav>

      <main className="flex w-full flex-col">
        <div className="bg-mineshaft flex h-[538px] flex-col items-center ">
          <div className="mt-10 mb-10">
            <SVG type="logo" />
          </div>
          <div className="flex h-[45px] w-[620px] items-center rounded-md shadow-xl shadow-black">
            <div className="bg-mineshaft flex w-[180px] items-center justify-center">
              <Text>All Categories</Text>
            </div>
            <div className="bg-springwood flex h-full w-full items-center justify-center ">
              <Text className="text-mineshaft">
                Search transactions, blocks, programs...
              </Text>
            </div>
            <div className="bg-mineshaft flex w-16 items-center justify-center ">
              <SVG type="logo" width={20} height={18} />
            </div>
          </div>
        </div>
        <div className="bg-springwood flex h-[600px] w-full flex-col px-36 py-4">
          <h1 className="text-4xl font-bold">Featured</h1>

          <div className="flex flex-row">
            {R.range(0, 5).map((i) => (
              <div className="flex flex-row items-center gap-4">
                <div className="bg-mineshaft h-32 w-32 rounded-md"></div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">Title</h1>
                  <p className="text-base">Description</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
