import {Footer} from 'ui';
import {MenuDocs} from '../components/MenuDocs';
import clsx from 'clsx';
import Router from 'next/router';

import {Navbar} from '../components/Navbar';

export type PublicLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function PublicLayout(props: PublicLayoutProps): JSX.Element {
  const {children} = props;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={'flex w-full bg-pink-500 flex-row items-center justify-center'}>
        {children}
        <MenuDocs />
      </main>
      <Footer />
    </div>
  );
}
