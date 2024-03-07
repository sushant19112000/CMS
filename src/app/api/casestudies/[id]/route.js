import { getCaseStudy, updateCaseStudy, deleteCaseStudy } from "@/app/lib/casestudies"; 
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    console.log("Get case study request");
    try {
        const id=parseInt(params.id)
        const caseStudy = await getCaseStudy(id); 
        return NextResponse.json({ blog:caseStudy }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const PUT = async (req, res) => {
    try {
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const updatedCaseStudy = JSON.parse(requestBody);
        updateCaseStudy(1, updatedCaseStudy); 
        return NextResponse.json({ message: "Case study updated" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

export const DELETE = async (req, res) => {
    console.log("Delete case study request");
    try {
        deleteCaseStudy(1); 
        return NextResponse.json({ message: "Case study deleted" }, { status: 204 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
