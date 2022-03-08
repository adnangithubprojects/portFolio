import React from "react";
import "../Components/Components.css";
export default function Button({
  width = "w-16",
  btnName = "addText",
  fun,
  Gborder,
  Hidden,
}) {
  const widthClass = {
    small: "md:w-[170px] w-[300px]",
    medium: "w-[200px] ",
    large: "w-[300px]",
  };
  const style = {
    border: "btn_tag ",
  };
  const HiddenStyle = {
    display: "btn_tag2",
  };
  // console.log("width >> ", props.width);
  // const classes = classNames(`w-[${props.width || 400}px]`, "bg-red-500");

  return (
    <>
      <button
        onClick={fun}
        className={` ${widthClass[width]} ${HiddenStyle[Hidden]} ${style[Gborder]} btn bg-yellow-600 hover:bg-gradient-to-r bg from-pink-600 to-yellow-600  h-[48px] capitalize rounded hover:rounded-md  text-white text-2xl  px-2  `}
      >
        <span className="span1" />
        {btnName}
      </button>
    </>
  );
}
