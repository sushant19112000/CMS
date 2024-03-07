import { getInsight, updateInsight, deleteInsight } from "@/app/lib/insights"; 
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    console.log("Get insight request");
    try {
        const id=parseInt(params.id)
        const blog=await getInsight(id)
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
        const updatedInsight = JSON.parse(requestBody);
        updateInsight(1, updatedInsight); 
        return NextResponse.json({ message: "Insight updated" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const DELETE = async (req, res) => {
    console.log("Delete insight request");
    try {
        deleteInsight(1); 
        return NextResponse.json({ message: "Insight deleted" }, { status: 204 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
