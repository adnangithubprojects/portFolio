import React from "react";

export default function App1_head() {
  return (
    <>
      <div className="bg-[#272728] text-white pt-16 ">
        <div className="head-sec md:space-x-12">
          <div className="left-col w-[350px]">
            <img
              src="/main.jpg"
              className="img_tag rounded w-[328px] h-[400px] md:w-[448px] md:h-[455px]  lg:w-[448px] lg:h-[455px] "
            />
          </div>

          <div className="right-col w-[350px] md:w-[556px] flex flex-col">
            <h1 className="text-2xl md:text-7xl font-bold head_sec_heading my-2 ">
              Yusting moro
            </h1>
            <p className="leading-4 md:leading-4 head_sec_para">
              Want to get an incredible UI/UX design for your app or website
              that will meet all your and your users’ requirements? At Omertex,
              we will always find the best solution for you to define the
              success of your product and to be in trend. We are confident that
              design is “a packaging of your digital product” that should
              attract users and be clear for them. For our UI/UX designers,
              every detail matters!
            </p>
            <p className="leading-4 md:leading-4 head_sec_para">
              We work with different types of products and our expertise is not
              limited to one industry only. However, there are several
              principles that are reflected in every design that we create. They
              are simplicity, user-friendliness and excellence.
            </p>
            <a href="#" className="text-yellow-600 ">
              adnanahmadafridi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
