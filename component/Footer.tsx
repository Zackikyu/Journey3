import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  type NavigationItem = {
    href: string;
    name: string;
  };

  type Logo={
    src:string;
    alt:string;
    height:number;
  }

  const navigationItem: NavigationItem[] = [
    { href: "/", name: "Home" },
    { href: "/Hotel", name: "Hotel" },
    { href: "/food", name: "Food" },
    { href: "/attractions", name: "Attractions" },
  ];

  const logo:Logo[]=[
    {src:'/image/image 3.svg', alt:'image3',height:55},
    {src:'/image/image 5.svg', alt:'image5',height:55},
    {src:'/image/image 7.svg', alt:'image7',height:70},
    {src:'/image/image 8.svg', alt:'image8',height:55},
  ];
  return (
    <div className="bg-background-secondary h-[189px]">
      <div className="w-full  pt-[34px]  flex flex-row justify-center">
        <div className="flex flex-row gap-[27px] ">
          {logo.map((item) => (
            <Image
              key={`navitem-${item.alt}`}
              src={item.src}
              alt={item.alt}
              height={item.height}
              width={55}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-[88px] px-20 py-8 flex flex-row justify-center">
        <div className="flex flex-row gap-[90px] font-inter px-[73px] s">
          {navigationItem.map((item) => (
            <Link
              className="text-black hover:text-primary hover:scale-105 transition-all duration-120 ease-out"
              key={`navitem-${item.name}`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Footer;
