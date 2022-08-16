import Head from "next/head";
import { SVG } from "ui";
import {
  Menu,
  MenuItem,
} from "../components/Menu";

const items: MenuItem[] = [
  {
    label: "Kindelia",
    img: "kindelia.svg",
    href: "https://kindelia.org",
  },
  {
    label: "Kind2",
    img: "kind2.svg",
    href: "https://kind2.kindelia.org",
  },
  {
    label: "HVM",
    img: "hvm.svg",
    href: "https://hvm.kindelia.org",
  },
  {
    label: "Blog",
    img: "blog.svg",
    href: "https://blog.kindelia.org",
  },
];

export default function Home() {
  const fullYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Kindelia Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex w-auto flex-col items-center px-4 pt-16 sm:pt-24 lg:px-8">
        <div className="mb-10 flex cursor-pointer">
          <SVG type="logo" />
        </div>
        <Menu items={items} />
      </main>
      <footer className="mt-auto flex h-24 w-full items-center justify-around bg-black">
        <div>
          <text className="text-springwood text-base font-semibold opacity-50 font-inter">
            © {fullYear} Kindelia Foundation
          </text>
        </div>
        <div className="flex items-center gap-4">
          <text className="text-springwood text-base font-semibold opacity-50 font-inter">
            Follow us
          </text>
          <SVG type="github" />
          <SVG type="twitter" />
          <SVG type="youtube" />
          <SVG type="discord" />
        </div>
      </footer>
    </div>
  );
}
