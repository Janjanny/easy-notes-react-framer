"use client";
import React from "react";
import { motion, useAnimate, stagger, easeIn } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useEffect } from "react";

const AddNoteModal = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".form-note", { opacity: 1, y: 0 }, { ease: easeIn });

    animate(
      ".input-div",
      { opacity: 1, y: 0 },
      { delay: stagger(0.2), ease: easeIn },
    );
  }, [scope]);

  const spanVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div ref={scope}>
      <motion.form
        action=""
        className="form-note grid grid-cols-1 w-[30rem] p-[2.2rem] border border-grey-stroke bg-white-card shadow-md gap-[2rem] rounded-xl"
        initial={{ opacity: 0, y: 40 }}
      >
        <motion.div
          className="flex flex-col input-div"
          initial={{ opacity: 0, y: 20 }}
        >
          <label htmlFor="title" className=" font-bold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className=" font-bold  bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5  outline-none"
          />
        </motion.div>

        <motion.div
          className="flex flex-col input-div"
          initial={{ opacity: 0, y: 20 }}
        >
          <label htmlFor="details" className=" font-bold">
            Details
          </label>
          <textarea
            name="details"
            id="details"
            cols="30"
            rows="5"
            className=" text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5 outline-none"
          ></textarea>
        </motion.div>

        <motion.div
          className="flex justify-end input-div"
          initial={{ opacity: 0, y: 20 }}
          
        >
          <motion.button
            type="submit"
            className="w-full flex justify-center items-center gap-2 border border-black py-[8px] px-[18px] rounded-[2rem] bg-black text-white "
            whileHover="hover"
          >
            Add Note{" "}
            <motion.span
              variants={spanVariants}
              initial="hidden"
              whileHover="visible"
            >
              <FaPlus />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default AddNoteModal;
