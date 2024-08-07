import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Note from "../../../models/note";

// function to send Note to DB
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Note.create({ title, description });
  return NextResponse.json({ message: "Note Created" }, { status: 201 });
}

// function to fetch all the notes
export async function GET() {
  await connectMongoDB();
  const notes = await Note.find();
  return NextResponse.json({ notes });
}

// function to delete a note
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Note.findByIdAndDelete(id);
  return NextResponse.json({ message: "Note Deleted" }, { status: 200 });
}
