import React from "react";
import Card from "../about/App1_card";
import Button from "../Components/Button";
import { homeSec3 } from "../about/Sdata";
export default function Sec3() {
  return (
    <>
      <div className=" bg-[#272728] flex flex-col items-center pb-16">
        <h1 className="card-sec-head">Resources</h1>
        <div className="card_body">{homeSec3.map(Card1)}</div>
        <Button btnName="Order" width="large" />
      </div>
    </>
  );
}

function Card1(val) {
  return (
    <>
      <div>
        <Card icon={val.icn} name={val.name} text={val.text} />
      </div>
    </>
  );
}
