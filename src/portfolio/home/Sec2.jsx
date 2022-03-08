import React from "react";
import Button from "../Components/Button";
// import Imge from "../public/images/main.jpg";
export default function Sec2() {
  return (
    <>
      <div className=" bg-[#272728] flex justify-center pb-16 sm:py-4">
        <div className=" flex justify-center space-x-4 md:w-[967px] md:h-[453px] w-[400px] md:flex-row h-[00px] flex-col  rounded bg-[#1f1f21] ">
          <div className="img md:w-[326px] w-[326px] md:h=[405px] h-[370px] mt-4 ">
            <img
              src="/images/main.jpg"
              alt=""
              className="rounded-md ml-4 md:w-[320px] md:h-[400px] w-[294px] h-[365px]"
            />
          </div>
          <div className="flex flex-col space-y-8 sm:space-y-4 md:w-[600px] md:h-[444px] h-[630px] w-[290px] ">
            <h1 className="md:text-6xl text-4xl font-bold text-yellow-600">
              Yuxting Mora
            </h1>
            <p className="text-white md:text-xl text-md ">
              Want to get an incredible UI/UX design for your app or website
              that will meet all your and your users’ requirements? At Omertex,
              we will always find the best solution for you to define the
              success of your product and to be in trend. We are confident that
              design is “a packaging of your digital product” that should
              attract users and be clear for them. For our UI/UX designers,
              every detail matters! We work with different types of products and
              our expertise is not limited to one industry only. However, there
              are several principles that are reflected in every design that we
              create. They are simplicity, user-friendliness and excellence.
            </p>
            <Button btnName="Read more" width="medium" Gborder="border" />
          </div>
        </div>
      </div>
    </>
  );
}
