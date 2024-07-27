import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/note";

// function to update the note
export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Note.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Note Edited" }, { status: 200 });
}

// function to get a specific note
export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const note = await Note.findOne({_id: id});
    return NextResponse.json({note}, {status: 200})
}
