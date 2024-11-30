import React, { SVGProps } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
  children?: React.ReactNode;
}

export default function Iphone15ProComponent({
  width = 433,
  height = 882,
  src,
  children,
  ...props
}: Iphone15ProProps) {
  return (
    <div className="relative" style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* ... (keep all the existing SVG paths) ... */}
      </svg>
      <div className="absolute top-[19.25px] left-[21.25px] w-[389.5px] h-[843.5px] overflow-hidden rounded-[55.75px]">
        {children}
      </div>
    </div>
  );
}
