import React from "react";
import { Link } from "react-router-dom";
import { FaFigma, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function App1_footer() {
  // const icon = </>
  return (
    <>
      <div className="bg-[#1F1F21] w-full h-full">
        <div className=" flex flex-col md:flex-row items-center pt-8 flex-wrap justify-center md:gap-8  ">
          <Footer_Card heading={<Link to="/about"> Yuxin </Link>} />
          <Footer_Card
            item1={<Link to="/about"> About Us </Link>}
            item2={
              <a href="#" className="text-sm">
                adnanahmadafridi@gmail.com
              </a>
            }
            item3="03021711515"
          />
          <Footer_Card
            item1={<Link to="/Services"> Services </Link>}
            item2="Projects"
            item3="information"
          />
          <Footer_Card
            item1="Social"
            item2={
              <div className="flex space-x-6 text-2xl">
                <FaLinkedin /> <FaFigma /> <FaFacebook />{" "}
              </div>
            }
          />
        </div>
        <div className="">
          <div className="border-slate-500 border-b-2 mx-36 mt-8"></div>
          <h1 className="ml-24 md:mx-36 mt-2 text-white pb-8 text-sm">
            all right reserved by Yuxin 2021
          </h1>
        </div>
      </div>
    </>
  );
}
function Footer_Card({ heading, item1, item2, item3 }) {
  return (
    <>
      <div className="text-white font-bold w-[200px] h-[150px]  pl-0 p-6">
        <h1 className="text-2xl">{heading}</h1>
        <ul className="flex flex-col gap-y-4">
          <li className="text-yellow-600 ">{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </>
  );
}
