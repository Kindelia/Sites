import Head from 'next/head';

import { useBlocksQuery } from '../hooks/useBlocksQuery';

export default function Home() {
  const blockQuery = useBlocksQuery();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Blocks - Kindelia Hub</title>
      </Head>

      <main>
        <h1>Blocks Hub</h1>
        <pre>{JSON.stringify(blockQuery.data?.data, null, 2)}</pre>
      </main>
    </div>
  );
}
