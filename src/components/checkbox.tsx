import { cva, type VariantProps } from 'class-variance-authority'
import SkeletonComponent from './skeleton'
import CheckIcon from '../assets/icons/checkRegular.svg?react'
import Icon from './icon'

export const inputCheckboxWrapperVariants = cva(`
    inline-flex items-center justify-center 
    cursor-pointer relative group
  `)

export const inputCheckboxVariants = cva(`
    appearance-none peer flex items-center justify-center
    transition overflow-hidden
    
  `, {
  variants: {
    variant: {
      none: "",
      default: `
        border-2 border-solid
      border-green-base hover:border-green-dark hover:bg-green-dark/20
      checked:border-green-base checked:bg-green-base
      group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
      `
    },
    size: {
      md: "w-5 h-5 rounded-sm"
    },
    disabled: {
      true: "pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false
  }
})

export const inputCheckboxIconVariants = cva(`
    absolute top-1/2 left-1 -translate-y-1/2
    hidden peer-checked:block fill-white
  `, {
  variants: {
    size: {
      md: "h-3 w-3"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean
}

export function InputCheckbox({ size, disabled, loading, className, variant, ...props }: InputCheckboxProps) {
  if (loading) {
    return <SkeletonComponent
      className={inputCheckboxVariants({ size, variant: "none" })}
    />
  }

  return <label className={inputCheckboxWrapperVariants({ className })}>
    <input type="checkbox" {...props} className={inputCheckboxVariants({ size, variant, disabled })} />
    <Icon className={inputCheckboxIconVariants({size})} svg={CheckIcon}/>
  </label>
}