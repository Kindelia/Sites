import {twMerge} from 'tailwind-merge';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export function Text(props: TextProps): JSX.Element {
  const {children, className, ...restProps} = props;

  return (
    <text
      className={twMerge('font-inter text-springwood font-semibold', className)}
      {...restProps}
    >
      {children}
    </text>
  );
}
