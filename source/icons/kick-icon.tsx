import * as React from "react";

type KickIconProps = React.SVGProps<SVGSVGElement> & {
  brand?: boolean;
  title?: string;
};

export function KickIcon({
  brand = true,
  title = "Kick",
  className,
  ...props
}: KickIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M1.74 0h7.71v5.33h2.56V2.67h2.57V0h7.71v7.92h-2.57v2.65h-2.56v2.65h2.56v2.65h2.57V24h-7.71v-2.65h-2.57v-2.65h-2.56V24H1.74V0z"
        fill={brand ? "#53FC18" : "currentColor"}
      />
    </svg>
  );
}

export default KickIcon;
