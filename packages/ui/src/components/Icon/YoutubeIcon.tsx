export type YoutubeIconProps = React.ComponentProps<'svg'>;

export function YoutubeIcon(props: YoutubeIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.153.245c-4.805-.327-15.508-.326-20.306 0C.65.6.039 3.74 0 12 .039 20.247.645 23.4 5.847 23.755c4.8.326 15.501.328 20.306 0C31.35 23.4 31.961 20.262 32 12 31.961 3.753 31.355.601 26.153.245zM12 17.334V6.668l10.667 5.324L12 17.334z"
        fill="#F7F3F0"
        fillOpacity={0.5}
      />
    </svg>
  );
}
