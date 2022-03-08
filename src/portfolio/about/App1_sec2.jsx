import React from "react";
import { Card1 } from "./App1_card";
import { sec2 } from "./Sdata";
export default function App1_sec2() {
  return (
    <>
      <div className="bg-[#272728] flex flex-col items-center">
        <h1 class="text-[#F9B53A] text-4xl py-12"> Expercience </h1>
        <div className="sec1_main">{sec2.map(Sec2)}</div>
      </div>
    </>
  );
}

function Sec2(val) {
  return (
    <>
      <div>
        <Card1 icon={val.icn} head={val.name} para={val.text} />
      </div>
    </>
  );
}
