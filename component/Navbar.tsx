import React from "react";
import Link from "next/link";
import Image from "next/image";

type NavigationItem = {
  href: string;
  name: string;
};

const navigationItem: NavigationItem[] = [
  { href: "/", name: "Home" },
  { href: "/packages", name: "Packages" },
  { href: "/about", name: "About Us" },
  { href: "/contacts", name: "Contacts" },
];
export default function Navbar() {
  return (
    <div className="w-full h-[88px] px-20 py-8 flex flex-row justify-between">
      <div className="flex flex-row font-playfair-display italic font-semibold">
        <Image
          src={"/project0103.png"}
          alt={"icon"}
          width={27}
          height={24}
        ></Image>
        <div>Journey</div>
      </div>
      <div className="flex flex-row gap-[90px] font-inter px-[73px] s">
        {navigationItem.map((item) => (
          <Link
            className="text-black font-bold hover:text-primary hover:scale-105 transition-all duration-120 ease-out"
            key={`navitem-${item.name}`}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
