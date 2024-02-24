import { NextResponse } from "next/server";

export async function POST(req, res) {
  let data = await req.json();
  console.log(data);
  return NextResponse.json({ res: "padisahim sen cok yasa" }, { status: 203 });
}

export async function GET(req, res) {
  console.log("GET request received");
  return NextResponse.json({ res: "ben de yigit miyim?" }, { status: 201 });
}
