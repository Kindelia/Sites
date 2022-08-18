import {SVG} from 'ui';

export interface MenuItem {
  label: string;
  href: string;
  img: string;
}

export interface MenuProps {
  items: MenuItem[];
}

export function Menu(props: MenuProps): JSX.Element {
  const {items} = props;

  return (
    <div className="flex flex-row gap-10">
      {items.map((menu, index) => (
        <div
          className="bg-mineshaft border-mineshaft flex h-[300px] w-[221px] cursor-pointer flex-col rounded-lg border pt-5 hover:border-white"
          key={index}>
          <h1 className="text-springwood text-center text-3xl font-semibold tracking-wider">
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
