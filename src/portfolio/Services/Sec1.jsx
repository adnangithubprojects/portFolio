import React from "react";

export default function Sec1() {
  return (
    <>
      <div className="bg-[#272728]   md:space-y-8 pt-20 md:py-20 ">
        <div className="">
          <p className="text-white  text-xl md:text-2xl">Web Designing</p>
          <h1 className="text-yellow-600 font-bold text-2xl md:text-6xl my-8 md:mb-24">
            React JavaScript
          </h1>
        </div>
        <div>
          <img
            src="/images/Contact1.jpg"
            alt="upload image"
            className="mt-8 w-[328px] h[170px] md:w-[1154px] md:h-[534px] rounded-lg "
          />
        </div>
        <div>
          <h1 className="text-yellow-600 font-bold text-2xl md:text-6xl my-8 md:mt-24">
            Information
          </h1>
          <div className="text-white  space-y-4 w-96 text-sm md:text-xl leading-4 md:leading-8 md:w-[1154px]">
            <p>
              React has been designed from the start for gradual adoption, and
              you can use as little or as much React as you need. Whether you
              want to get a taste of React, add some interactivity to a simple
              HTML page, or start a complex React-powered app, the links in this
              section will help you get started.
            </p>
            <p>
              The React documentation assumes some familiarity with programming
              in the JavaScript language. You don’t have to be an expert, but
              it’s harder to learn both React and JavaScript at the same time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
