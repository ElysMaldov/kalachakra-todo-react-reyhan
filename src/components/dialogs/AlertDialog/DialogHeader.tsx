import { mergeClass } from "@/lib/merge-class";
import type { ComponentProps } from "react";

export interface DialogHeaderProps extends ComponentProps<"header"> {}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return (
    <header
      {...props}
      className={mergeClass(
        "gap-y-6.25 flex w-full flex-col items-center",
        className
      )}
    />
  );
};

export default DialogHeader;
