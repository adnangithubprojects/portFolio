import React from "react";

export default function Sec2() {
  return (
    <>
      <div>
        <div className=" space-y-8 md:py-16">
          <h1 className="text-yellow-600 font-bold text-2xl md:text-6xl my-8 md:mt-24">
            Colors
          </h1>
          <div className="text-white  space-y-4 w-96 text-sm md:text-xl leading-4 md:leading-8 md:w-[1154px]">
            <p>
              Color controls what color is active on the color picker. You can
              use this to initialize the color picker with a particular color,
              or to keep it in sync.A Collection of Color Pickers from Sketch,
              Photoshop, Chrome, Github, Twitter, Material Design & more.
            </p>
          </div>
          <div>
            <img
              src="/images/Contact3.jpg"
              alt="upload image"
              className="mt-8 w-[328px] h[170px] md:w-[1154px] md:h-[534px] rounded-lg "
            />
          </div>
          <div>
            <img
              src="/images/Contact4.jpg"
              alt="upload image"
              className="mt-8 w-[328px] h[170px] md:w-[1154px] md:h-[534px] rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}
