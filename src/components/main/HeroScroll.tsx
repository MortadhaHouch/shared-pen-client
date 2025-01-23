"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll({title,image,description}:{description:string,title:string,image:string}) {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
                {title.split(" ")[0]} <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {title.split(" ").slice(1).toString().split(",").join(" ")}
              </span>
            </h1>
            <p>{description}</p>
          </>
        }
      >
        <Image
          src={image}
          alt="hero"
          height={300}
          width={300}
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-[clamp(300px,60%,450px)] aspect-square"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
