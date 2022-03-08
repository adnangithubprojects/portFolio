import React from "react";
import Button from "../Components/Button";
import "../home/Home.css";
import { homeSec4 } from "../about/Sdata";
export default function Sec4() {
  return (
    <>
      <div className=" bg-[#272728] flex flex-col gap-y-16 items-center  py-20">
        <h1 className="tracking-wider text-6xl text-yellow-600 mb-16">
          Experience
        </h1>
        {/* {homeSec4.map(Card)} */}
        <div>
          <Card
            image="/images/section41.jpg "
            head="Una Opcion-Adopta Facil"
            text="App Ficitia."
          />
        </div>
        <div>
          <Card
            image="/images/section42.jpg "
            head="Una Opcion-Adopta Facil"
            text="App Ficitia."
          />
        </div>
        <div>
          <Card
            image="/images/section43.jpg "
            head="Una Opcion-Adopta Facil"
            text="App Ficitia."
          />
        </div>

        <Button width="large" />
      </div>
    </>
  );
}

function Card({ image, head, text }) {
  return (
    <>
      <div className="wrapper">
        <img
          src={image}
          alt=""
          className=" rounded-2xl sm:w-[328px] sm:h-[151px]  md:w-[1155px] md:h-[534px] "
        />
        <div className="overlay hidden md:block text-white ">
          <h1 className="text-4xl">{head}</h1>
          <p className="text-2xl">{text} </p>
        </div>
      </div>
    </>
  );
}
