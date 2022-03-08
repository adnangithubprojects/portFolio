import React from "react";
import NavBar from "../Components/NavBar";
import App1_footer from "../about/App1_footer";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";

export default function Services() {
  return (
    <div>
      <NavBar />
      <div className="bg-[#272728] flex flex-col items-center justify-center">
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
      </div>
      <App1_footer />
    </div>
  );
}
