export type VideoPlayerProps = React.ComponentProps<"svg">;

export function VideoPlayerIcon(props: VideoPlayerProps) {
  return (
    <svg
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M60 39.036c2.667 1.54 2.667 5.389 0 6.928L33.75 61.12c-2.667 1.54-6-.385-6-3.465v-30.31c0-3.08 3.333-5.004 6-3.464L60 39.035z"
        fill="#333"
      />
      <circle cx={41.5} cy={41.5} r={39.5} stroke="#000" strokeWidth={4} />
    </svg>
  );
}
