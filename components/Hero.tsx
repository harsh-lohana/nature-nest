import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { slideList } from "@/constants/constants";
const Hero: React.FC = () => {
  return (
    <div className="w-full lg:h-screen sm:h-auto p-2 sm:p-4 md:p-6 lg:p-8">
      <Carousel slide className="w-full h-96 lg:h-full">
        {slideList.map((url, index) => (
          <div className="w-full h-full" key={index}>
            <Image src={url} layout="fill" alt=".." objectFit="cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
