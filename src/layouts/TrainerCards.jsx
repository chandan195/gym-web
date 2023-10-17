import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const TrainerCard = ({name ,img}) => {
  return (
    <div
     className=" flex flex-col items-center gap-3 pt-8 w-full md:w-1/4 bg-[#222] rounded-xl
     md:hover:pt-4 md:hover:bg-teal-300 md:hover:w-1/3 ">
      <div className=" w-3/4  md:hover:4/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
      <div>
        <h1 className=" text-xl font-semibold py-2 text-center">{name}</h1>
        <div className=" flex flex-row justify-between py-4 gap-4">
          <BsInstagram size={25} className=" hover:text-[#e53961] cursor-pointer" />
          <BsFacebook size={25} className=" hover:text-[#4267B2] cursor-pointer" />
          <RiTwitterXFill size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;