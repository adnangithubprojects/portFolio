import React from "react";
import Nav from "../Components/NavBar";
import App1_head from "./App1_head";
import App1_sec from "./App1_sec";
import App1_sec1 from "./App1_sec1";
import App1_sec2 from "./App1_sec2";
import App1_sec3 from "./App1_sec3";
import App1_footer from "./App1_footer";
export default function App1() {
  return (
    <>
      <Nav />
      <App1_head />
      <App1_sec />
      <App1_sec1 />
      <App1_sec2 />
      <App1_sec3 />
      <App1_footer />
    </>
  );
}
