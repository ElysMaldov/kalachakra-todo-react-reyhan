import { mergeClass } from "@/lib/merge-class";
import type { ComponentProps, ReactNode } from "react";

export interface InputProps extends ComponentProps<"input"> {
  trailingIcon?: ReactNode;
}

const Input = ({ className, trailingIcon, ...props }: InputProps) => {
  // TODO add dark mode
  return (
    <div className={mergeClass("relative w-full")}>
      <input
        type="text"
        {...props}
        className={mergeClass(
          "w-full",
          "border-accent dark:border-secondary rounded-[5px] border px-4 py-2",
          "font-inter font-medium",
          "placeholder:text-accent-ghost",
          "text-accent dark:text-secondary text-base",
          "focus-visible:border-accent focus-visible:ring-accent-ghost focus-visible:outline-none focus-visible:ring-[2px]",
          className
        )}
      />
      <div className="absolute bottom-2 right-4 top-2">{trailingIcon}</div>
    </div>
  );
};

export default Input;
