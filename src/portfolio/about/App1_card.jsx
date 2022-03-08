import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <span className="text-4xl icon ">{props.icon}</span>
        <h1 className="text-3xl font-bold">{props.name}</h1>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export function Card1(crd) {
  return (
    <>
      <div className="Sec1_card border-[1px] border-neutral-500">
        <span className="text-6xl">{crd.icon}</span>
        <h1 className="text-3xl font-bold py-4 text-yellow-600">{crd.head}</h1>
        <p className="text-xl mx-4">{crd.para}</p>
        <span className="flex">{crd.review}</span>
      </div>
    </>
  );
}
