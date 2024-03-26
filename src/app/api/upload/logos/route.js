import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
 
export const POST = async (req, res) => {
  console.log('post logo')
  const formData = await req.formData();
 
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename =  file.name.replaceAll(" ", "_");
  try {
    await writeFile(
      path.join(process.cwd(), "public/campaign/logos/" + filename),
      buffer
    );
    return NextResponse.json({ "fileName": filename, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
