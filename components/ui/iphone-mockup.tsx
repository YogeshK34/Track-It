"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IPhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  orientation?: "portrait" | "landscape";
  variant?: "light" | "dark";
}

export function IPhoneMockup({
  children,
  orientation = "portrait",
  variant = "dark",
  className,
  ...props
}: IPhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative aspect-[375/852] w-[300px] md:w-[375px]",
        orientation === "landscape" && "rotate-90",
        className
      )}
      {...props}
    >
      {/* Phone frame */}
      <div
        className={cn(
          "absolute inset-0 rounded-[55px]",
          variant === "dark" ? "bg-gray-950" : "bg-gray-200"
        )}
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 h-[35px] w-[126px] -translate-x-1/2 rounded-full bg-black">
          <div className="absolute left-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#3C3C40]" />
        </div>

        {/* Inner bezel */}
        <div
          className={cn(
            "absolute inset-1 rounded-[50px] overflow-hidden",
            variant === "dark" ? "bg-black" : "bg-white"
          )}
        >
          {children}
        </div>

        {/* Buttons */}
        <div className="absolute -left-[2px] top-[115px] h-[32px] w-[4px] rounded-full bg-gray-800" />
        <div className="absolute -left-[2px] top-[165px] h-[65px] w-[4px] rounded-full bg-gray-800" />
        <div className="absolute -right-[2px] top-[140px] h-[65px] w-[4px] rounded-full bg-gray-800" />
      </div>
    </div>
  );
}
