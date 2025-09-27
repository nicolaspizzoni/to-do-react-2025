import React from "react";
import { cva, type VariantProps } from 'class-variance-authority';

export const iconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: ""
    },
    size: {
      small: "size-4",
      medium: "size-6",
      large: "size-8"
    }
  },
  defaultVariants: {
    animate: false,
    size: "medium"
  }
})

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>
}

export default function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
  return <SvgComponent className={iconVariants({ animate, className })} {...props} />
}