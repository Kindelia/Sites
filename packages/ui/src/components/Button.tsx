import clsx from 'clsx';

type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary';
}

export function Button(props: ButtonProps): JSX.Element {
  const {children, variant, ...restProps} = props;

  const style =
    variant === 'secondary'
      ? 'bg-white text-mineshaft'
      : 'bg-black text-springwood';

  return (
    <button
      className={clsx(
        'font-inter rounded-2xl border-none px-4 py-2 text-base font-semibold',
        style,
        props.className,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
