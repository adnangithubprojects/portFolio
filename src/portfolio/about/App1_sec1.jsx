import React from "react";
import "./App1.css";
import { Card1 } from "./App1_card";
import { card1 } from "./Sdata";
export default function App1_sec1() {
  return (
    <>
      <div className="bg-[#272728] flex flex-col items-center">
        <h1 className="text-[#F9B53A] text-4xl py-12">Features</h1>
        <div className="sec1_main">{card1.map(Ab)}</div>
      </div>
    </>
  );
}

function Ab(value) {
  return (
    <>
      <div>
        <Card1
          icon={value.icn}
          head={value.name}
          para={value.text}
          review={value.review}
        />
      </div>
    </>
  );
}
