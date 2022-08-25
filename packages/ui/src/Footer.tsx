import {FaDiscord, FaTwitter, FaYoutube, FaGithub} from 'react-icons/fa';
import {Link} from './Link';

export function Footer(): JSX.Element {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-mineshaft mt-auto flex h-24 w-full items-center justify-around">
      <div>
        <text className="text-springwood font-inter text-base font-semibold leading-8 opacity-50">
          © {fullYear} Kindelia Foundation
        </text>
      </div>
      <div className="flex items-center gap-4">
        <text className="text-springwood font-inter text-base font-semibold leading-8 opacity-50">
          Follow Us
        </text>
        <Link href="https://twitter.com/KindeliaOrg" cy="twitter">
          <FaTwitter />
        </Link>
        <Link href="https://www.youtube.com/c/Kindelia" cy="youtube">
          <FaYoutube />
        </Link>
        <Link href="https://discord.gg/kindelia" cy="discord">
          <FaDiscord />
        </Link>
        <Link href="https://github.com/Kindelia" cy="github">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}
