//import React from "react";
import { Link } from "react-router-dom";
import { AiTwotonePhone,AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-[#222] rounded-t-3xl">
      <div className=" flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className=" w-full md:w-1/4">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitZone</h1>
          </Link>
          <p className=" mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Address</h1>
          <p className=" mt-4">89925 chadani chok Square Mumbai 12721</p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Contact</h1>
          <div className=" flex flex-row items-center gap-2 mt-4 hover:text-brightRed cursor-pointer">
            <AiTwotonePhone size={20} />
            <p>+91-777-24-12</p>
          </div>
          <div className=" flex flex-row items-center gap-2 hover:text-brightRed cursor-pointer">
            <AiOutlineMail size={20}  />
            <p>FitZone@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center mt-4">
        &#169;{currentYear} | All
          rights reserved 
        </p>
      </div>
    </div>
  );
};

export default Footer;