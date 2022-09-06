import {BlogIcon, HVMIcon, Kind2Icon, KindeliaIcon} from 'ui';

export interface MenuItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

export interface MenuProps {}

const items: MenuItem[] = [
  {
    label: 'Chain',
    icon: <KindeliaIcon className="h-32 w-32" />,
    // href: 'https://kindelia.org',
    href: 'https://github.com/Kindelia/Kindelia',
  },
  {
    label: 'Kind2',
    icon: <Kind2Icon className="h-32 w-32" />,
    // href: 'https://kind2.kindelia.org',
    href: 'https://github.com/Kindelia/Kind2'
  },
  {
    label: 'HVM',
    icon: <HVMIcon className="h-32 w-32" />,
    // href: 'https://hvm.kindelia.org',
    href: 'https://github.com/Kindelia/hvm',
  },
  {
    label: 'Manifesto',
    icon: <BlogIcon className="h-32 w-32" />,
    // href: 'https://kindelia.org/blog',
    href: 'https://github.com/Kindelia/manifesto'
  },
];

export function Menu(_props: MenuProps): JSX.Element {
  return (
    <div className="mb-10 mt-10 lg:mt-auto flex flex-row flex-wrap justify-center gap-3">
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
            {menu.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
