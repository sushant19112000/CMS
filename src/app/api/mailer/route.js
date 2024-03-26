import { addMailer } from "@/app/lib/mailer";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req, res) => {
    try {
        const requestBody = await req.text();
        const requestData=await JSON.parse(requestBody)
        const newMailer=await addMailer(requestData);
        return NextResponse.json({ message: "Mailer added", newMailer }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};
