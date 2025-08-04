import type { ReactNode } from "react";

export interface DialogProps {
  children?: ReactNode;
}

const Dialog = ({ children }: DialogProps) => {
  return (
    <section className="bg-primary py-4.5 px-7.5 flex w-full max-w-[500px] flex-col items-center rounded-2xl">
      {children}
    </section>
  );
};

export default Dialog;
