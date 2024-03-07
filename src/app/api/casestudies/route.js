import { addCaseStudy, getCaseStudies } from "@/app/lib/casestudies"; 
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req, res) => {
    console.log("Get case studies request");
    try {
        const Blogs =await getCaseStudies(); 
        return  NextResponse.json(Blogs, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};


export const POST = async (req, res) => {
    console.log("Post request");
    try{
        const requestBody = await req.text();
        const newCaseStudy=addCaseStudy(requestBody)
        return  NextResponse.json({message:"CaseStudy added",newCaseStudy},{status:201})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};
