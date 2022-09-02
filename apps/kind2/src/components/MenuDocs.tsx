import {useState} from 'react';
import {ArrowIcon, Text} from 'ui';
import clsx from 'clsx';

const menus = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        href: '/docs/en/getting-started',
      },
      {
        title: 'Benchmark',
        href: '/docs/en/getting-started',
      },
      {
        title: 'Metrics',
        href: '/docs/en/getting-started',
      },
      {
        title: 'Donate',
        href: '/docs/en/getting-started',
      },
    ],
  },
  {
    title: 'Guides',
    items: [
      {
        title: 'Getting Started',
        href: '/docs/en/getting-started',
      },
      {
        title: 'Benchmark',
        href: '/docs/en/getting-started',
      },
      {
        title: 'Metrics',
        href: '/docs/en/getting-started',
      },
      {
        title: 'Donate',
        href: '/docs/en/getting-started',
      },
    ],
  },
];

export function MenuDocs(): JSX.Element {
  const [menuIndex, setMenuIndex] = useState(0);

  return (
    <div className="bg-mineshaft ml-auto flex min-h-screen flex-col items-center justify-center gap-4 px-16">
      {menus.map((menu, index) => {
        const isIndex = index === menuIndex;

        return (
          <>
            <div
              className="flex cursor-pointer flex-row items-center gap-4"
              onClick={() => setMenuIndex(index)}
            >
              <Text
                className='text-springwood text-2xl font-bold'
              >
                {menu.title}
              </Text>
              <ArrowIcon
                className={clsx('h-4 w-4', isIndex ? 'rotate-180' : '')}
              />
            </div>
            {isIndex &&
              menu.items.map((item) => (
                <a
                  href={item.href}
                  className="text-springwood hover:text-gray-900"
                >
                  {item.title}
                </a>
              ))}
          </>
        );
      })}
    </div>
  );
}
