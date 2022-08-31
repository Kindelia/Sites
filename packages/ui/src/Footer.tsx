import {Link} from './Link';
import {DiscordIcon} from './Icon/DiscordIcon';
import {GithubIcon} from './Icon/GithubIcon';
import {TwitterIcon} from './Icon/TwitterIcon';
import {YoutubeIcon} from './Icon/YoutubeIcon';

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
        <Link href="https://github.com/Kindelia" cy="github">
          <GithubIcon  className='h-8 w-8 hover:text-springwood'/>
        </Link>
        <Link href="https://twitter.com/KindeliaOrg" cy="twitter">
          <TwitterIcon className='h-8 w-8 hover:text-springwood' />
        </Link>
        <Link href="https://www.youtube.com/c/Kindelia" cy="youtube">
          <YoutubeIcon className='h-8 w-8 hover:text-springwood' />
        </Link>
        <Link href="https://discord.gg/kindelia" cy="discord">
          <DiscordIcon className='h-8 w-8 hover:text-springwood' />
        </Link>
      </div>
    </footer>
  );
}
