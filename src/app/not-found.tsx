import Image from "next/image";
import React from "react";

const notFound = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <Image
        className="absolute h-full w-full object-cover"
        src="/NotFound.webp"
        alt="Not Found"
        width={600}
        height={500}
      />
      <div className="inset-0 bg-black opacity-25 absolute"> </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4"> Not Found Page </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">You are all alone here</p>
        </div>
      </div>
    </div>
  );
};

export default notFound;
