import { addLandingPage } from "@/app/lib/landingpage";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req, res) => {
    try {
        const requestBody = await req.text();
        const requestData=await JSON.parse(requestBody)
        const newInsight=await addLandingPage(requestData);
        return NextResponse.json({ message: "Insight added", newInsight }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};
