"use client"
import { Spotlight as SpotlightContainer } from "@/components/ui/spotlight-new";
import Title from "../svg/Title";
import { useTheme } from "next-themes";
export function Spotlight() {
    const {theme} = useTheme()
    return (
      <main
        className="min-h-screen w-full rounded-md flex flex-col md:items-center gap-5 md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden"
      >
        <SpotlightContainer/>
        <Title theme={theme||""}/>
        <div className="flex flex-col items-center justify-center text-center font-light w-[clamp(300px,750%,800px)] backdrop-blur-md p-4 md:p-8 bg-white dark:bg-zinc-900 rounded-md shadow-lg">
          <p className="text-black sm:text-xl md:text:2xl lg:text-3xl opacity-60 dark:text-white">
            Boost your workflow with a text editor that does it all: real-time collaboration, version history, seamless commenting, and rich text formatting. Access files anywhere with cloud storage and offline mode, use custom templates, track edits with live cursors, and save time with keyboard shortcuts—all in a sleek interface with dark mode for comfort.
          </p>
        </div>
        </main>
    );
}
