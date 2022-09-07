import {Link} from './Link';
import {DiscordIcon} from './Icon/DiscordIcon';
import {GithubIcon} from './Icon/GithubIcon';
import {TwitterIcon} from './Icon/TwitterIcon';
import {YoutubeIcon} from './Icon/YoutubeIcon';

export function Footer(): JSX.Element {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-mineshaft mt-auto flex h-24 w-full flex-col items-center justify-around sm:flex-row">
      <div>
        <text className="text-springwood font-inter text-base font-semibold leading-8 opacity-50">
          © {fullYear} Kindelia Foundation
        </text>
      </div>
      <div className="flex items-center gap-4">
        <text className="text-springwood font-inter text-base font-semibold leading-8 opacity-50">
          Follow Us
        </text>
        <Link href="https://github.com/Kindelia" cy="github">
          <GithubIcon className="hover:text-springwood h-8 w-8" />
        </Link>
        <Link href="https://twitter.com/KindeliaOrg" cy="twitter">
          <TwitterIcon className="hover:text-springwood h-8 w-8" />
        </Link>
        <Link href="https://www.youtube.com/c/Kindelia" cy="youtube">
          <YoutubeIcon className="hover:text-springwood h-8 w-8" />
        </Link>
        <Link href="https://discord.gg/kindelia" cy="discord">
          <DiscordIcon className="hover:text-springwood h-8 w-8" />
        </Link>
      </div>
    </footer>
  );
}
