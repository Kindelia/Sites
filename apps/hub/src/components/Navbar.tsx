import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link, LogoIcon } from 'ui';

type NavBarProps = {};

export function Navbar(_props: NavBarProps): JSX.Element {
  return (
    <nav className="bg-mineshaft flex h-16 w-full flex-row items-center justify-around border-b-2 border-neutral-600">
      <div className="flex flex-row items-center gap-7">
        <div className="h-9 w-10">
          <LogoIcon className='h-8 w-8' />
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
        <ConnectButton />
        {/* <img className="bg-springwood h-8 w-8 rounded-full" /> */}
      </div>
    </nav>
  );
}
