import { getResearch, updateResearch, deleteResearch } from "@/app/lib/research"; 
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    try {
        const id=parseInt(params.id)
        const blog=await getResearch(id)
        console.log(blog)
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
        const updatedresearch = JSON.parse(requestBody);
        updateResearch(1, updatedresearch); 
        return NextResponse.json({ message: "Research item updated" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const DELETE = async (req, res) => {
    console.log("Delete research item request");
    try {
        deleteResearch(1); 
        return NextResponse.json({ message: "Research item deleted" }, { status: 204 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
