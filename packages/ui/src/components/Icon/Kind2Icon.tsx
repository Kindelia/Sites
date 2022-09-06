export type Kind2IconProps = React.ComponentProps<'svg'>;

export function Kind2Icon({...props}: Kind2IconProps): JSX.Element {
  return (
    <svg
    viewBox="0 0 75 87"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_746_1372)" fill="#F7F3F0" fillOpacity={0.5}>
      <path d="M20.378 17.82H0v6.288h14.076l8.216 20.499L4.202 80.71H0V87h10.504l15.99-31.911L39.286 87H75v-6.29H45.588l-25.21-62.89z" />
      <path d="M75 6.29V0H64.496L46.555 34.383 32.773 0H0v6.29h26.47l25.21 62.89H75v-6.288H57.983l-7.227-18.03L70.798 6.29H75z" />
    </g>
    <defs>
      <clipPath id="clip0_746_1372">
        <path fill="#fff" d="M0 0H75V87H0z" />
      </clipPath>
    </defs>
  </svg>
  );
}
