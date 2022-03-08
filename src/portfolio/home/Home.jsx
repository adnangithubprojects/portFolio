import React from "react";
import Nav from "../Components/NavBar";
import Head from "./Head";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import App1_footer from "../about/App1_footer";
export default function Home() {
  return (
    <div>
      <Nav />
      <Head />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <App1_footer />
    </div>
  );
}
