type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export function Text(props: TextProps): JSX.Element {
  const {children, className} = props;

  return (
    <text
      className={`text-springwood text-center text-base font-semibold capitalize ${className}`}>
      {children}
    </text>
  );
}
