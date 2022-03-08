import React, { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/Components.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [Icon, setIcon] = useState(false);
  return (
    <>
      <nav className="nav_tag  px-4 md:px-2 fixed w-[400px] sm:w-full z-50">
        <div className="nav__icons">
          <Link to="/">
            <h1 className="text-3xl font-bold logo cursor-pointer ">Yuxin</h1>
          </Link>
        </div>

        <div>
          <ul
            onClick={() => setIcon(!Icon)}
            className={!Icon ? "menu active" : "menu"}
          >
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/about">
              <li className="focus:border-yellow-500">About Us</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
          </ul>
        </div>
        <div className="menu_icon">
          {!Icon ? (
            <FaBars onClick={() => setIcon(!Icon)} />
          ) : (
            <FaTimes onClick={() => setIcon(!Icon)} />
          )}
        </div>

        <div className="">
          <Link to="/contact">
            <Button width="small" btnName="search" Hidden="display" />
          </Link>
        </div>
      </nav>
    </>
  );
}
