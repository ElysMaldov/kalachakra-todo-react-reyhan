import type { ReactNode } from "react";

export interface OverlayProps {
  children: ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="absolute flex h-screen w-screen items-center justify-center bg-[hsla(0,0%,15%,0.7)] px-4">
      {children}
    </div>
  );
};

export default Overlay;
