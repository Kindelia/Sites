type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Link(props: LinkProps): JSX.Element {
  const {href, children, className} = props;

  return (
    <a
      href={href}
      className={`text-springwood text-center text-base font-semibold capitalize ${className}`}>
      {children}
    </a>
  );
}
