"use client"
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { useTheme } from "next-themes";
import {motion} from "framer-motion"
import Image from "next/image";
import Img from "/public/assets/images/Designer (1).jpeg"
export function SpotlightPreview() {
    const {theme} = useTheme()
  return (
    <div className={`h-[40rem] w-full rounded-md flex justify-center items-center flex-wrap gap-3 ${theme=="light"?"bg-white":"bg-black"}/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden`}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={theme=="light"?"rgba(0,0,0,.75)":"rgba(255,255,255,.75)"}
      />
      <motion.div
        whileInView={{
            opacity:1,
            filter:"blur(0)",
            x:0
        }}
        initial={{
            opacity:0,
            filter:"blur(10px)",
            x:-50
        }}
        transition={{
            duration:.75,
            type:"spring",
        }}
        className="flex flex-col justify-center items-center gap-2 w-[clamp(300px,45%,450px)] backdrop-blur-md border-2 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl lg:text-3xl relative">
            Write smarter, create faster
            <motion.span
                whileInView={{
                    width:0
                }}
                initial={{
                    width:"100%"
                }}
                transition={{
                    duration:1.25,
                    type:"spring"
                }}
                className="w-full h-full bg-primary absolute top-0 left-0"
            ></motion.span>
          </h2>
          <p className="relative">
            SharedPen redefines writing with a sleek, powerful, and intuitive text editor built for creators and collaborators. From real-time sync to distraction-free mode, WordFlow keeps your ideas flowing and your focus sharp. Write anywhere, anytime—effortlessly.
            <motion.span
                whileInView={{
                    width:0
                }}
                initial={{
                    width:"100%"
                }}
                transition={{
                    duration:1.75,
                    type:"spring",
                }}
                className="w-full h-full bg-primary absolute top-0 left-0"
            ></motion.span>
          </p>
        </motion.div>
        <motion.div className="w-[clamp(300px,40%,450px)] rounded-md overflow-hidden">
            <Image src={Img} alt="" width={400} height={400}/>
        </motion.div>
    </div>
  );
}
