export type KindIconProps = React.ComponentProps<'svg'>;

export function KindIcon(props: KindIconProps): JSX.Element {
  const {fill} = props;

  return (
    <svg
      viewBox="0 0 116 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_790_1448)" fill={fill ?? '#949291'}>
        <path d="M93.366 0v15.661a7.586 7.586 0 01-5.593 7.321L9.587 44.346a1.495 1.495 0 00-1.1 1.44V69H0V44.743a7.718 7.718 0 015.696-7.449L46.41 26.17 0 9.66V.816l8.488 3.007L42.5 15.87l-.068.019 18.113 6.415 23.32-6.372a1.38 1.38 0 001.013-1.326V0h8.487z" />
        <path d="M22.634 69V47.546l83.893-22.925a1.331 1.331 0 00.984-1.287V0H116v24.459a7.464 7.464 0 01-5.494 7.193L69.595 42.83 116 59.34v8.847l-8.488-3.006L73.499 53.13l.068-.019-18.113-6.415-24.34 6.648V69h-8.48z" />
      </g>
      <defs>
        <clipPath id="clip0_790_1448">
          <path fill="#fff" d="M0 0H116V69H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
