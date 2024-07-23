import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";

const Note = ({ title, description, id }) => {
  return (
    <div className="note-card  border border-grey-stroke bg-white-card shadow-md min-w-[8rem] w-full rounded-lg p-[1.5rem] cursor-pointer">
      <div className="w-full h-full relative ">
        <ul className="absolute right-0 text-black text-[1.1rem] flex flex-col gap-[1.3rem] ">
          <li>
            <FaRegTrashCan />
          </li>
          <li>
            <FaPenToSquare />
          </li>
        </ul>
        <h1 className="title font-bold text-xl w-10/12 mb-[.5rem]">{title}</h1>
        <p className="description w-10/12 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Note;
