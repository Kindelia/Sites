export type BlogIconProps = React.ComponentProps<'svg'>;

export function BlogIcon({...props}: BlogIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 124 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_788_1439)" fill="#949291">
        <path d="M51.482 0H0v10.477h51.482V0zM20.453 20.84H0v10.478h20.453V20.841zM124 20.84H31.028v10.478H124V20.841zM20.453 41.682H0v10.477h124V41.682H20.453zM20.453 62.523H0V73h20.453V62.523zM124 62.523H31.028V73H124V62.523z" />
      </g>
      <defs>
        <clipPath id="clip0_788_1439">
          <path fill="#fff" d="M0 0H124V73H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
