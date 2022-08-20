import {SVG} from 'ui';

export interface MenuItem {
  label: string;
  href: string;
  img: string;
}

export interface MenuProps {}

const items: MenuItem[] = [
  {
    label: 'Kindelia',
    img: 'kindelia.svg',
    href: 'https://kindelia.org',
  },
  {
    label: 'Kind2',
    img: 'kind2.svg',
    href: 'https://kind2.kindelia.org',
  },
  {
    label: 'HVM',
    img: 'hvm.svg',
    href: 'https://hvm.kindelia.org',
  },
  {
    label: 'Blog',
    img: 'blog.svg',
    href: 'https://blog.kindelia.org',
  },
];

export function Menu(_props: MenuProps): JSX.Element {
  return (
    <div className="flex flex-row gap-3 flex-wrap justify-center mb-10">
      {items.map((menu) => (
        <div
          className="bg-mineshaft border-mineshaft flex h-[300px] w-[221px] cursor-pointer flex-col rounded-lg border pt-5 hover:border-white"
          key={menu.label}>
          <h1 className="text-springwood text-center text-3xl font-semibold tracking-wider font-inter">
            {menu.label}
          </h1>
          <div className="mt-auto mb-4 flex flex-col items-center">
            <SVG type="kind2" />
          </div>
        </div>
      ))}
    </div>
  );
}
