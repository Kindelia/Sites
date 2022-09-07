import Router from 'next/router';
import {KindIcon, Link} from 'ui';

type NavBarProps = {};

export function Navbar(_props: NavBarProps): JSX.Element {
  function goToHome() {
    Router.push('/');
  }

  return (
    <nav className="bg-mineshaft flex h-16 w-full flex-row items-center justify-around">
      <div className="flex flex-row items-center gap-7">
        <KindIcon className="h-8 w-8 cursor-pointer" onClick={goToHome} />
        <Link
          href="/docs/en/getting-started"
          className="border-springwood border-b-2 text-base"
        >
          Documentation
        </Link>
        <Link href="" className="text-base">
          Blog
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        {/* <img className="bg-springwood h-8 w-8 rounded-full" /> */}
      </div>
    </nav>
  );
}
