"use client";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { motion, useAnimate, stagger } from "framer-motion";
import Link from "next/link";

const Note = ({ title, description, id }) => {
  return (
    <div className="note-card  border border-grey-stroke bg-white-card shadow-md min-w-[8rem] w-full rounded-lg p-[1.5rem] cursor-pointer outline outline-[2px] outline-transparent hover:outline hover:outline-[2px] hover:outline-grey-stroke hover:shadow-xl hover:scale-[1.01] transition-all ease-in ">
      <div className="w-full h-full relative ">
        <ul className="absolute right-0 text-black text-[1.1rem] flex flex-col gap-[1.3rem] ">
          <li className=" hover:scale-125 transition-transform ease-linear">
            <FaRegTrashCan />
          </li>
          <li className="hover:scale-125 transition-transform ease-linear">
            <Link href={`/editNote/${id}`}>
              <FaPenToSquare />
            </Link>
          </li>
        </ul>
        <h1 className="title font-bold text-xl w-10/12 mb-[.5rem]">{title}</h1>
        <p className="description w-10/12 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Note;
