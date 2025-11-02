import Image from "next/image";
import React from "react";

type ImageItem = {
  src: string;
  name: string;
  description: string;
};

const Page = () => {
  const imageItem: ImageItem[] = [
    { src: `/image/images 1.svg`, name: "Image1", description: "Description1" },
    { src: `/image/images 2.svg`, name: "Image2", description: "Description2" },
    { src: `/image/images 3.svg`, name: "Image3", description: "Description3" },
    { src: `/image/images 4.svg`, name: "Image4", description: "Description4" },
  ];
  return (
    <div className="ml-[37px]">
      <div>
        <h3 className="font-bold mb-[17px]">Popular homes in Tokyo</h3>
        <div className="flex flex-row gap-[72px]">
          {imageItem.map((item) => (
            <div key={`imageitem-${item.name}`}>
              <Image src={item.src} alt={item.name} width={222} height={230} />
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[18px] mb-[18px]">
        <h3 className="font-bold mb-[17px]">Available next month in Seoul</h3>
        <div className="flex flex-row gap-[72px]">
          {imageItem.map((item) => (
            <div key={`imageitem-${item.name}`}>
              <Image src={item.src} alt={item.name} width={222} height={230} />
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-[17px]">Stay in Bang Lamung District</h3>
        <div className="flex flex-row gap-[72px]">
          {imageItem.map((item) => (
            <div key={`imageitem-${item.name}`}>
              <Image src={item.src} alt={item.name} width={222} height={230} />
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
