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
      <div className={'flex w-full flex-col justify-center'}>{children}</div>
      <Footer />
    </div>
  );
}
