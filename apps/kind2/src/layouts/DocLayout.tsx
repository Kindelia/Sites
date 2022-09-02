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

  const isDoc = true

  const className = isDoc ? 'flex-row items-center justify-center' : '';

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={clsx('flex w-full flex-col bg-pink-500', className)}>
        {children}
        {isDoc && <MenuDocs />}
      </main>
      <Footer />
    </div>
  );
}
