import React from "react";
import { FaPlus, FaRegSun } from "react-icons/fa6";
import { motion } from "framer-motion"

import Link from "next/link";
const Navbar = () => {
  return (
    <>
        <div className="sticky top-0 z-[99] w-full bg-white-bg">
          <nav className=" w-10/12 mx-auto py-[1.5rem]  flex justify-between items-center">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}><Link href={"/"}><h1 className=" font-bold text-[1.8rem]">EasyNotes</h1></Link></motion.div>

            <div className="buttons flex gap-[1rem] ">
              <Link href={"/addNote"} className="flex items-center gap-2 border border-black py-[8px] px-[18px] rounded-[2rem]"> Add Note <FaPlus /> </Link>

              <button className="flex items-center gap-2 border border-black py-[8px] px-[18px] rounded-[2rem] w-max"> Light <FaRegSun /> </button>
              
              
            </div>
          </nav>
        </div>
    </>
  )
};


export default Navbar;
