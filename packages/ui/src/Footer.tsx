import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from './Link';

export function Footer(): JSX.Element {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-mineshaft mt-auto flex h-24 w-full items-center justify-around">
      <div>
        <text className="text-springwood text-base font-semibold opacity-50 font-inter leading-8">
          © {fullYear} Kindelia Foundation
        </text>
      </div>
      <div className="flex items-center gap-4">
        <text className="text-springwood text-base font-semibold opacity-50 font-inter leading-8">
          Follow Us
        </text>
        <Link href="https://twitter.com/kindelia">
          <FaTwitter />
        </Link>
        <Link href="https://youtube.com/kindelia">
          <FaYoutube />
        </Link>
        <Link href="https://discord.gg/kindelia">
          <FaDiscord />
        </Link>
      </div>
    </footer>
  );
}
