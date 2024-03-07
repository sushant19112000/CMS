import { addInsights, getInsights } from "@/app/lib/insights"; 
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req, res) => {
    console.log("Get insights request");
    try {
        const Blogs =await getInsights(); 
        return  NextResponse.json(Blogs, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const POST = async (req, res) => {
    console.log("Post insight request");
    try {
        const requestBody = await req.text();
        const newInsight=await addInsights(requestBody);
        return NextResponse.json({ message: "Insight added", newInsight }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};
