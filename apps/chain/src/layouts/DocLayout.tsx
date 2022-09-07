import clsx from 'clsx';
import {Footer} from 'ui';

import {MenuDocs} from '../components/MenuDocs';
import {Navbar} from '../components/Navbar';

export type DocLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function DocLayout(props: DocLayoutProps): JSX.Element {
  const {children} = props;

  const isDoc = true;

  const className = isDoc ? 'flex-row items-center justify-center' : '';

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={clsx('flex w-full flex-row', className)}>
        <div className="border-mineshaft flex min-h-screen flex-1 flex-col border-2 p-32">
          {children}
        </div>
        {isDoc && <MenuDocs />}
      </main>
      <Footer />
    </div>
  );
}
