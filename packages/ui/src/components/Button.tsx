import {twMerge} from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function Button(props: ButtonProps): JSX.Element {
  const {children, className, variant, ...restProps} = props;

  const style =
    variant === 'secondary'
      ? 'bg-transparent text-mineshaft border border-mineshaft'
      : 'bg-black text-springwood';

  return (
    <button
      className={twMerge(
        'font-inter rounded-lg px-4 py-2 text-base font-semibold',
        style,
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
