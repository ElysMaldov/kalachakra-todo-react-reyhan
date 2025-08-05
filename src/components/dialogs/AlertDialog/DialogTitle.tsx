import { mergeClass } from "@/lib/merge-class";
import type { ComponentProps } from "react";

export interface DialogTitleProps extends ComponentProps<"h2"> {}

const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <header
      {...props}
      className={mergeClass("text-2xl font-medium uppercase", className)}
    />
  );
};

export default DialogTitle;
