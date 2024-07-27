import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Note from "../../../models/note";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Note.create({title, description});
    return NextResponse.json({message: "Note Created"}, {status: 201})
}