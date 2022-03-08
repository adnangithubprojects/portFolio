import React from "react";
import Button from "../Components/Button";
import { Card1 } from "./App1_card";
import { sec3 } from "./Sdata";
export default function App1_sec2() {
  return (
    <>
      <div className="bg-[#272728] flex flex-col items-center pb-8">
        <div className="bg-[#272728]  flex flex-col items-center mb-8">
          <h1 class="text-[#F9B53A] text-4xl py-12"> Expercience </h1>
          <div className="sec1_main">{sec3.map(Sec3)}</div>
        </div>
        <Button width="large" btnName="Contact us" fun={() => alert("hello")} />
      </div>
    </>
  );
}

function Sec3(val) {
  return (
    <>
      <div>
        <Card1 icon={val.icn} head={val.name} />
      </div>
    </>
  );
}
