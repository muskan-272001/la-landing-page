import React from "react";
import Image from "next/image";
import littlearyanslogo from "../../public/little-aryans-logo.webp";

const Header = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
          {/* <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
          </a> */}
            <Image src={littlearyanslogo} alt="" height={150} width={150} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
