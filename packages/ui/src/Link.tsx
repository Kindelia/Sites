type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  cy?: string;
};

export function Link(props: LinkProps): JSX.Element {
  const {href, children, className, cy} = props;

  return (
    <a
      data-cy={cy}
      href={href}
      className={`text-springwood text-center text-base font-semibold capitalize ${className}`}
    >
      {children}
    </a>
  );
}
