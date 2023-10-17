import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className=" md:fixed flex flex-row justify-between md:px-32 px-5 p-5 gap-16">
        <div className=" flex items-center p-2">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitZone</h1>
          </Link>
        </div>

        <nav className=" hidden md:flex items-center p-2 gap-5">
          <Link
            to="/"
           
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/plans"
           
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Plans
          </Link>
          <Link
            to="/about"
          
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/trainers"
          
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Trainers
          </Link>
          <Link
            to="/contact"
           
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Contact
          </Link>
          <Link
           to="/details"
            className=" hover:text-brightRed transition-all cursor-pointer"
          >
            Details
          </Link>
        </nav>
{/* ............................................. */}
        <div className="md:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenuUnfold size={28} />
        </div>
      </div>

      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#171717] text-white left-0 top-20
         font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-2/4 h-fit transition-transform duration-300`}
      >
        <Link
       
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
        
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Plans
        </Link>
        <Link
        
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          About Us
        </Link>
        <Link
          to="/trainers"
         
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Trainers
        </Link>
        <Link
       
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Contact
        </Link>
        <Link
         
          className=" hover:text-brightRed transition-all cursor-pointer"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
