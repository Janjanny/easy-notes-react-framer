import Note from "./components/Note";

export default function Home() {
  return (
    <>
      <div className=" w-full h-screen">
        <main className=" w-10/12 h-full mx-auto ">
          <div className="">
            <Note/>
          </div>
        </main>

      </div>
      
    </>
  );
}
