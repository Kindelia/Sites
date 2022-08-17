import {SVG} from './SVG';
import Link from 'next/link';

export function Footer(): JSX.Element {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-mineshaft mt-auto flex h-24 w-full items-center justify-around">
      <div>
        <text className="text-springwood font-inter text-base font-semibold opacity-50">
          © {fullYear} Kindelia Foundation
        </text>
      </div>
      <div className="flex items-center gap-4">
        <text className="text-springwood font-inter text-base font-semibold opacity-50">
          Follow us
        </text>
        <Link href="https://twitter.com/kindelia">
          <SVG type="twitter" />
        </Link>
        <Link href="https://youtube.com/kindelia">
          <SVG type="youtube" />
        </Link>
        <Link href="https://discord.gg/kindelia">
          <SVG type="discord" />
        </Link>
      </div>
    </footer>
  );
}
