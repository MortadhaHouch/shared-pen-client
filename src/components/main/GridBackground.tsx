import React from "react";

export function GridBackground({children}:{children:React.ReactNode}) {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {children}
    </div>
  );
}
