import { addResearch, getResearchs } from "@/app/lib/research"; 
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req, res) => {
    console.log("Get research request");
    try {
        const researchItems = await getResearchs(); 
        
        return  NextResponse.json(researchItems, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const POST = async (req, res) => {
    try {
        const requestBody = await req.text();
        const newResearch=addResearch(requestBody)
        return NextResponse.json({ message: "Research item added"}, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};
