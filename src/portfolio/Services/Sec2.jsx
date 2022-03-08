import React from "react";

export default function Sec2() {
  return (
    <>
      <div>
        <div className="bg-[#272728]  space-y-8 py-16">
          <h1 className="text-yellow-600 font-bold text-2xl md:text-6xl my-8 md:mt-24">
            TypoGraphy
          </h1>
          <div className="text-white  space-y-4 w-96 text-sm md:text-xl leading-4 md:leading-8 md:w-[1154px]">
            <p>
              Typography is a Material-UI component used to standardize the text
              and its related CSS properties without worrying about browser. The
              Typography component in Material UI provides a helpful variety of
              styled text components.
            </p>
          </div>
          <div>
            <img
              src="/images/Contact2.jpg"
              alt="upload image"
              className="mt-8 w-[328px] h[170px] md:w-[1154px] md:h-[534px] rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}
