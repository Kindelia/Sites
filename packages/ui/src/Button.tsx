type ButtonProps = {
  children: React.ReactNode;
};

export function Button(props: ButtonProps): JSX.Element {
  const {children} = props;

  return (
    <button className="bg-mineshaft text-springwood border-springwood rounded-md border-2 px-4 py-1 text-base font-semibold">
      {children}
    </button>
  );
}
