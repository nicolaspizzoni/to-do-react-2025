import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeTextVariants = cva("", {
  variants: {
    textVariant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark"
    }
  },
  defaultVariants: {
    textVariant: "primary"
  }
})

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      "primary": "bg-green-light",
      "secondary": "bg-pink-light"
    },
    size: {
      "sm": "py-0.5 px-2"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants>, VariantProps<typeof badgeTextVariants> { }

export function Badge({ variant, size, textVariant, className, children, ...props }: BadgeProps) {
  return <div className={badgeVariants({variant, size, className})} {...props}>
    <Text variant="body-sm-bold" className={badgeTextVariants({textVariant})}>{children}</Text>
  </div>
}