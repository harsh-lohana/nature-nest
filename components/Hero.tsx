import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { slideList } from "@/constants/constants";
const Hero = () => {
  return (
    <div className="w-full h-screen sm:p-4 lg:p-8">
      <Carousel slide className="w-full h-full">
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
