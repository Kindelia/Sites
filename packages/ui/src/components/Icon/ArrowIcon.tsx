export type ArrowIconProps = React.ComponentProps<'svg'>;

export function ArrowIcon(props: ArrowIconProps): JSX.Element {
  const {fill} = props

  return (
    <svg
      viewBox="0 0 12 8"
      fill={fill ?? "#F7F3F0"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.243 5.657L9.9 0l1.414 1.414-5.657 5.657-1.414-1.414z"
      />
      <path
        d="M5.657 7.071L0 1.414 1.414 0l5.657 5.657L5.657 7.07z"
      />
    </svg>
  );
}
