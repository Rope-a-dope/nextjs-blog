import React from "react";

export default function Conatiner({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto bg-whilte min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}
