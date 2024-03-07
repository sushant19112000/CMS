import { getWhitePaper, updateWhitePaper, deleteWhitePaper } from "@/app/lib/whitepapers"; // Import your white paper functions
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    console.log("Get white paper request");
    try {
        const id=parseInt(params.id)
        const blog=await getWhitePaper(id)
        return NextResponse.json({blog:blog},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const PUT = async (req, res) => {
    try {
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const updatedWhitePaper = JSON.parse(requestBody);
        updateWhitePaper(1, updatedWhitePaper); 
        return NextResponse.json({ message: "White Paper updated" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const DELETE = async (req, res) => {
    console.log("Delete white paper request");
    try {
        deleteWhitePaper(1); 
        return NextResponse.json({ message: "White Paper deleted" }, { status: 204 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
