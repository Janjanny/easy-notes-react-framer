"use client";
import Note from "./components/Note";
import { motion, useAnimate, stagger, easeIn } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".note",
      { opacity: 1, y: 0 },
      { delay: stagger(0.2), ease: easeIn },
    );
  }, [scope]);

  const notes = [
    {
      id: 242312,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, doloremque.",
    },
    {
      id: 2213124,
      title: "Lorem Ipsum, dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, doloremque. dolor sit amet consectetur adipisicing elit. Quidem, doloremque",
    },
    {
      id: 12342,
      title: "Lorem Ipsum, dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur ",
    },
  ];

  return (
    <>
      <div className=" w-full h-max ">
        <main className=" w-10/12 h-full mx-auto ">
          <div className="pt-[1rem] grid grid-cols-3 gap-4" ref={scope}>
            {notes.map((note, key) => (
              <motion.div className="note" initial={{ opacity: 0, y: 40 }}>
                <Note
                  key={key}
                  title={note.title}
                  description={note.desc}
                  id={note.id}
                />
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
