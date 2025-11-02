import React from "react";
import Image from "next/image";

interface CoverProps {
  title: string;
  imageUrl: string;
  title_des: string;
}

export default function Cover(props: CoverProps) {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center w-full relative h-[1472px]">
      <div className="text-[204px] text-white font-playfair-display z-10">{` ${props.title} `}</div>
      <div className="italic text-[35px] text-white font-inter z-10">{` ${props.title_des} `}</div>
      <div className="absolute overflow-hidden justify-center items-center w-full  h-[1472px]">
        <Image
          className="h-full w-full object-cover brightness-40 bg-linear-to-bl from-white to-black"
          src={props.imageUrl}
          alt={props.title}
          width={1440}
          height={1472}
        />
      </div>
    </div>
  );
}