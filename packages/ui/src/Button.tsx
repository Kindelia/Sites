type ButtonProps = {
  children: React.ReactNode;
};

export function Button(props: ButtonProps): JSX.Element {
  const {children} = props;

  return (
    <button className="bg-mineshaft text-springwood rounded-md px-4 py-1 text-base font-semibold border-2 border-springwood">
      {children}
    </button>
  );
}
