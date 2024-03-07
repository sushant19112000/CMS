import { getCaseStudyCategories,addCaseStudyCategories } from '@/app/lib/caseStudyCategories';
import { NextResponse,NextRequest } from "next/server";


export const GET = async (req, res) => {
    console.log("Get request");
    try {
        const CaseStudyCategories = await getCaseStudyCategories()
        return  NextResponse.json({ CaseStudyCategories:CaseStudyCategories }, { status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};

export const POST = async (req, res) => {
    console.log("Post request");
    try{
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const newCaseStudyCategory = JSON.parse(requestBody);
        await addCaseStudyCategories(newCaseStudyCategory)
        return  NextResponse.json({message:"CaseStudyCategory added",newCaseStudyCategory},{status:201})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};






