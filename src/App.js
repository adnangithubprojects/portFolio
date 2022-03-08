import React from "react";
import App1 from "./portfolio/about/App1";
import Home from "./portfolio/home/Home";
import Services from "./portfolio/Services/Services";
import { Route, Routes } from "react-router-dom";
import Contact1 from "./portfolio/Contacts/Contact1";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<App1 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact1 />} />
      </Routes>
    </div>
  );
}
