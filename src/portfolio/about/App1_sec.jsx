import React from "react";
import Card from "./App1_card";
import sdata from "./Sdata";
import "./App1.css";

export default function App1_sec() {
  return (
    <>
      <div className="bg-[#272728] flex flex-col items-center">
        <h1 className="card-sec-head">Our Services</h1>

        <div className="card_body">{sdata.map(ncard)}</div>
      </div>
    </>
  );
}

function ncard(val) {
  return (
    <>
      <div>
        <Card icon={val.icn} name={val.name} text={val.text} />
      </div>
    </>
  );
}
