import { mergeClass } from "@/lib/merge-class";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const buttonVariants = cva(
  "uppercase rounded-[5px] font-medium text-lg cursor-pointer disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary",
        outline: "border-accent border text-accent"
      },
      size: {
        default: "py-2.5 px-5.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = ({ variant, className, size, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={mergeClass(buttonVariants({ variant, size, className }))}
    />
  );
};

export default Button;
