import { addWhitepaper, getWhitePapers } from "@/app/lib/whitepapers"; 
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req, res) => {
    console.log("Get white papers request");
    try {
        const Blogs = await getWhitePapers()
        return  NextResponse.json(Blogs, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const POST = async (req, res) => {
    console.log("Post white paper request");
    try {
        const requestBody = await req.text();
        const newWhitePaper=await addWhitepaper(requestBody);
        return NextResponse.json({ message: "White paper added", newWhitePaper }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};
