"use client";
import Note from "./components/Note";
import { motion, useAnimate, stagger } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(".note", {opacity: 1, y:0}, {delay: stagger(.5), ease: 'easeIn'} )

  }, [scope])

  const notes = [
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, doloremque.",
    },
    {
      title: "Lorem Ipsum, dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, doloremque. dolor sit amet consectetur adipisicing elit. Quidem, doloremque",
    },
    {
      title: "Lorem Ipsum, dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur ",
    },
  ];

  return (
    <>
      <div className=" w-full h-screen">
        <main className=" w-10/12 h-full mx-auto ">
          <div className="pt-[1rem] grid grid-cols-3 gap-4" ref={scope}>
            {notes.map((note, key) => (
              <motion.div className="note" initial={{opacity:0, y:40}}>
                <Note key={key} title={note.title} description={note.desc} />
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
