import React from "react";
import { Meteors as MeteorsComponent } from "../ui/meteors";
import clsx from "clsx";

export function Meteors({children,className}:{children:React.ReactNode,className?:string}) {
    return (
        <div className={clsx(className)}>
            <div className="w-full h-full relative">
                <div className="relative shadow-xl bg-slate-200 dark:bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                    {children}
                    <MeteorsComponent number={20} />
                </div>
            </div>
        </div>
    );
}
