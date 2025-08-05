import { mergeClass } from "@/lib/merge-class";
import type { ComponentProps } from "react";

export interface DialogFooterProps extends ComponentProps<"footer"> {}

const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return (
    <footer
      {...props}
      className={mergeClass(
        "mt-[128px] flex w-full justify-between",
        className
      )}
    />
  );
};

export default DialogFooter;
