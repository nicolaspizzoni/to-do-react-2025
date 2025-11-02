import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(`
    bg-white rounded-lg border-solid
    border-gray-200 shadow-sm
  `,
  {
    variants: {
      size: {
        none: "",
        md: "p-5"
      }
    },
    defaultVariants: {
      size: "none"
    }
  }
)

interface CardProps extends VariantProps<typeof cardVariants>,
React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements
}

export default function CardComponent({
  as = "div",
  className,
  size,
  children,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({size, className}),
      ...props
    },
    children
  )
}