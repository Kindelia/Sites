import classNames from 'classnames';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export function Text(props: TextProps): JSX.Element {
  const {children} = props;

  const className = classNames(
    // TODO: for some reason... I had to do this workaround 
    // because it seems that the tail is getting lost in which text color to keep
    props.className ? props.className : 'text-springwood',
    // text-base
    'font-inter text-center font-semibold capitalize',
  );

  return <text className={className}>{children}</text>;
}
