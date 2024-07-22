import React from "react";
import { FaPlus, FaRegSun } from "react-icons/fa6";

import Link from "next/link";
const Navbar = () => {
  return (
    <>
        <div className="sticky top-0 z-[99] w-full bg-white-bg">
          <nav className=" w-10/12 mx-auto py-[1.5rem]  flex justify-between items-center">
            <h1 className=" font-bold text-[1.8rem]">EasyNotes</h1>

            <div className="buttons">
              <button className="flex items-center gap-2 border border-black py-[8px] px-[18px] rounded-[2rem]">Add Note <FaPlus /> </button>
              <button className="flex items-center gap-2 border border-black py-[8px] px-[18px] rounded-[2rem]">Light <FaPlus /> </button>
            </div>
          </nav>
        </div>
    </>
  )
};


export default Navbar;
