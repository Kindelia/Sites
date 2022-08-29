import {SVG} from 'ui';

export interface MenuItem {
  label: string;
  href: string;
  icon: string;
}

export interface MenuProps {}

const items: MenuItem[] = [
  {
    label: 'Kindelia',
    icon: 'kindelia',
    href: 'https://kindelia.org',
  },
  {
    label: 'Kind2',
    icon: 'kind2',
    href: 'https://kind2.kindelia.org',
  },
  {
    label: 'HVM',
    icon: 'hvm',
    // href: 'https://hvm.kindelia.org',
    href: 'https://github.com/Kindelia/hvm',
  },
  {
    label: 'Blog',
    icon: 'blog',
    href: 'https://kindelia.org/blog',
  },
];

export function Menu(_props: MenuProps): JSX.Element {
  return (
    <div className="mb-10 flex flex-row flex-wrap justify-center gap-3">
      {items.map((menu) => (
        <a
          href={menu.href}
          className="bg-mineshaft border-mineshaft flex h-[300px] w-[221px] cursor-pointer flex-col rounded-lg border pt-5 hover:border-white"
          key={menu.label}
        >
          <h1 className="text-springwood font-inter text-center text-3xl font-semibold tracking-wider">
            {menu.label}
          </h1>
          <div className="mt-auto mb-4 flex flex-col items-center">
            {/* <SVG type={menu.icon} /> */}
          </div>
        </a>
      ))}
    </div>
  );
}
