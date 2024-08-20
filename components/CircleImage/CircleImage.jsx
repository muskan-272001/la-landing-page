import React from "react";
import Image from "next/image";
import homeImage from "../../public/homeImage.png";

const CircleImage = () => {
  return (
    <>
      <div class="circle-container">
        <div class="circle">
          <Image src={homeImage} alt="Image 1" />
        </div>
        <div class="circle">
          <Image src={homeImage} alt="Image 1" />
        </div>
      </div>
      <div class="circle flex justify-center">
        <Image src={homeImage} alt="Image 1" />
      </div>
    </>
  );
};

export default CircleImage;
