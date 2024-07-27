"use client";
import React from "react";
import { FaPlus, FaRegSun } from "react-icons/fa6";
import { motion, useAnimate, stagger } from "framer-motion";
import { useState, useEffect } from "react";

import Link from "next/link";
const Navbar = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".button", { opacity: 1, y: 0 }, { delay: stagger(0.2) });
  }, [scope]);

  return (
    <>
      <div className="sticky top-0 z-[99] w-full bg-white-bg">
        <nav className=" w-10/12 mx-auto py-[1.5rem]  flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={"/"}>
              <h1 className=" font-bold text-[1.8rem] hover:scale-110 transition-transform ease-in-out">
                EasyNotes
              </h1>
            </Link>
          </motion.div>

          <motion.div className="buttons flex gap-[1rem] " ref={scope}>
            <motion.div className="button " initial={{ opacity: 0, y: 20 }}>
              <Link
                href={"/addNote"}
                className=" flex items-center gap-2 border bg-transparent border-black py-[8px] px-[18px] rounded-[2rem] hover:bg-black hover:text-white transition-all ease-linear"
              >
                {" "}
                Add Note <FaPlus />{" "}
              </Link>
            </motion.div>

            <motion.div className="button" initial={{ opacity: 0, y: 20 }}>
              <button className=" flex items-center gap-2 border border-black py-[8px] px-[18px] rounded-[2rem] w-max hover:bg-black hover:text-white transition-all ease-linear">
                {" "}
                Light <FaRegSun />{" "}
              </button>
            </motion.div>
          </motion.div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
