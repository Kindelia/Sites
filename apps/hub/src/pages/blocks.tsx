import Head from 'next/head';

import {useBlocksQuery} from '../hooks/useBlocksQuery';
import { PublicLayout } from '../layouts/PublicLayout';

export default function Home() {
  const blockQuery = useBlocksQuery();

  return (
    <PublicLayout title="Blocks">
      <main>
        
      </main>
    </PublicLayout>
  );
}
