import * as F from '@fxts/core';
import {LogoIcon} from 'ui';
import {FeaturedCard} from '../components/FeaturedCard';
import {PublicLayout} from '../layouts/PublicLayout';

import {Search} from '../components/Search';

export default function Home() {
  const featuredList = F.pipe(
    F.range(3),
    F.map((item) => <FeaturedCard key={item} />),
    F.toArray,
  );

  const discoverList = F.pipe(
    F.range(3),
    F.map((item) => <FeaturedCard key={item} />),
    F.toArray,
  );

  return (
    <PublicLayout title="Hub | Kindelia">
      <main className="flex w-full flex-col">
        <div className="bg-mineshaft flex h-[538px] flex-col items-center ">
          <div className="mt-20 mb-20">
            <LogoIcon className="h-48 w-52" />
          </div>
          <Search />
        </div>
        <div className="bg-springwood flex h-[600px] w-full flex-col px-36 py-4">
          <h1 className="font-inter mb-6 text-4xl font-bold">Featured</h1>
          <div className="flex flex-row flex-wrap gap-8">{featuredList}</div>
        </div>
        <div className="bg-springwood flex h-[600px] w-full flex-col px-36 py-4">
          <h1 className="font-inter mb-6 text-4xl font-bold">Discover</h1>
          <div className="flex flex-row flex-wrap gap-8">{discoverList}</div>
        </div>
      </main>
    </PublicLayout>
  );
}
