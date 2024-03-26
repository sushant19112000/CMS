import { addDownloadPage } from "@/app/lib/downloadpage";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req, res) => {
    try {
        const requestBody = await req.text();
        console.log(requestBody)
        const requestData=await JSON.parse(requestBody)
        const newDownloadPage=await addDownloadPage(requestData);
        return NextResponse.json({ message: "DownloadPage added", newDownloadPage }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};


