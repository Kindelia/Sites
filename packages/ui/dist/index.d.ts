declare const Button: () => JSX.Element;

declare type SVGProps = {
    type: "logo" | "kind2" | "github" | "twitter" | "youtube" | "discord";
};
declare function SVG({ type }: SVGProps): JSX.Element;

declare function Footer(): JSX.Element;

export { Button, Footer, SVG };
