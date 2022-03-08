import React from "react";
import Button from "../Components/Button";
export default function Sec1() {
  return (
    <>
      <div className="flex items-center justify-center sm:pt-20 sm:py-8 bg-[#272728] text-white">
        <div className=" md:my-24 mt-16 w-[500px] h-[400px] flex flex-col items-center justify-center space-y-8">
          <h1 className="text-3xl md:text-6xl">
            Soy <span className="text-yellow-600 font-bold">Yuxting mora</span>
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold">Desender UI/UX</h1>
          <p className="text-sm md:text-[18px] mx-8">
            UI design and UX design are two of the most often confused and
            conflated terms in web and app design. And understandably so.
            They’re usually placed together in a single term, UI/UX design,
          </p>
          <div className=" md:flex  md:flex-row md:space-y-1  md:space-x-4  flex flex-col space-y-8 space-x-0 items-center ">
            <Button btnName="Order" width="small" />
            <Button btnName="Contact" width="small" Gborder="border" />
          </div>
        </div>
      </div>
    </>
  );
}
