import Note from "./components/Note";

export default function Home() {

  
  const notes = [{title: 'Lorem Ipsum', desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, doloremque."}, {title: 'Lorem Ipsum, dolor', desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, doloremque. dolor sit amet consectetur adipisicing elit. Quidem, doloremque"}, {title: 'Lorem Ipsum, dolor', desc: "Lorem ipsum, dolor sit amet consectetur "}]

  return (
    <>
      <div className=" w-full h-screen">
        <main className=" w-10/12 h-full mx-auto ">
          <div className="pt-[1rem] grid grid-cols-3 gap-4">
            {notes.map((note, key) => (
              <Note key={key} title={note.title} description={note.desc}/>
            ))}
          </div>
        </main>

      </div>
      
    </>
  );
}
