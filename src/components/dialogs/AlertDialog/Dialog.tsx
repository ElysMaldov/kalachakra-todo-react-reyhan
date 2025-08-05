import type { ReactNode } from "react";

export interface DialogProps {
  children?: ReactNode;
}

const Dialog = ({ children }: DialogProps) => {
  return (
    <section className="bg-primary py-4.5 px-7.5 border-primary dark:border-secondary flex w-full max-w-[500px] flex-col items-center rounded-2xl border">
      {children}
    </section>
  );
};

export default Dialog;
